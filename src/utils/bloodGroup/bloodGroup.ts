export type IbloodGroup = 'A_POSITIVE' | 'A_NEGATIVE' | 'AB_POSITIVE' | 'AB_NEGATIVE' | 'O_POSITIVE' | 'O_NEGATIVE' | 'B_POSITIVE' | 'B_NEGATIVE';

export const makeBloodGroups = (group: IbloodGroup): string => {
    let myGroups: string;
    switch (group) {
        case 'A_POSITIVE':
            myGroups = 'A+';
            break;
        case 'A_NEGATIVE':
            myGroups = 'A-';
            break;
        case 'AB_POSITIVE':
            myGroups = 'AB+';
            break;
        case 'AB_NEGATIVE':
            myGroups = 'AB-';
            break;
        case 'O_POSITIVE':
            myGroups = 'O+';
            break;
        case 'O_NEGATIVE':
            myGroups = 'O-';
            break;
        case 'B_POSITIVE':
            myGroups = 'B+';
            break;
        case 'B_NEGATIVE':
            myGroups = 'B-';
            break;
        default:
            myGroups = '';
            break;
    }
    return myGroups;
};
