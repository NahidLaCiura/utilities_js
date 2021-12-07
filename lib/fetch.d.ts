declare enum HttpMethod {
    get = "GET",
    post = "POST",
    put = "PUT",
    patch = "PATCH",
    delete = "DELETE"
}
declare function request(url: string | undefined, method: HttpMethod, data: {}, action: Function, error: Function): void;
declare function get(url: string, action: Function, error: Function): void;
declare function post(url: string, data: {}, action: Function, error: Function): void;
declare function put(url: string, data: {}, action: Function, error: Function): void;
declare function patch(url: string, data: {}, action: Function, error: Function): void;
declare function deleteR(url: string, action: Function, error: Function): void;
declare const _default: {
    HttpMethod: typeof HttpMethod;
    request: typeof request;
    get: typeof get;
    post: typeof post;
    put: typeof put;
    patch: typeof patch;
    deleteR: typeof deleteR;
};
export default _default;
