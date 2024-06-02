// app/api/upload/route.ts
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
    const data = await req.formData();
    const file = data.get('file');
    console.log(file);

    if (!file) {
        return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const formData = new FormData();
    formData.append('image', file as Blob);
    console.log({ api_key: process.env.API_KEY })

    try {
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.API_KEY}`, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error uploading file:', errorData);
            return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
        }

        const responseData = await response.json();
        console.log(responseData);

        return NextResponse.json(responseData);
    } catch (error:any) {
        console.error('Error uploading file:', error.message);
        return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
    }
};
