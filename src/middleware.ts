import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // return NextResponse.redirect(new URL('/home', request.url))
    const accessToken = request.cookies.get('accessToken')?.value
    if(!accessToken){
        return NextResponse.redirect(new URL('/signin', request.url))
    }
    if(accessToken){
        return NextResponse.next();
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/donnors/blood-request/:path*','/dashboard/:path*'],
}