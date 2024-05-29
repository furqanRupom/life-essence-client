export const getLocalStorage = (key: string) => {
    if (!key || typeof window == 'undefined') {
        return "";
    };
    return localStorage?.getItem(key);
}