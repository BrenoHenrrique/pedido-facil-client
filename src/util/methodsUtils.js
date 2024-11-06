export function saveInLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

export function getInLocalStorage(key) {
    return localStorage.getItem(key);
}