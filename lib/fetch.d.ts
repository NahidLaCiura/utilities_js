export declare enum HttpMethod {
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH",
    delete = "DELETE"
}
export declare function request(url: string | undefined, method: HttpMethod, data: {}, action: Function, error: Function): void;
export declare function get(url: string, action: Function, error: Function): void;
export declare function post(url: string, data: {}, action: Function, error: Function): void;
export declare function put(url: string, data: {}, action: Function, error: Function): void;
export declare function patch(url: string, data: {}, action: Function, error: Function): void;
export declare function deleteR(url: string, action: Function, error: Function): void;
declare global {
    export interface Number {
        isBigNumber(): boolean;
    }
}
