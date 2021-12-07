export function setData(key: string, value: any) {localStorage.setItem(key, value);}

export function getData(key: string): any {return localStorage.getItem(key);}

export function getString(key: string): string | null {return localStorage.getItem(key);}
