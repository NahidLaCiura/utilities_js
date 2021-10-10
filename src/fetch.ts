export enum HttpMethod {
	get = "GET",
	post = "POST",
	put = "PUT",
	patch = "PATCH",
	delete = "DELETE",
}

export function request(
	url = "",
	method: HttpMethod,
	data: {},
	action: Function,
	error: Function,
) {
	fetch(url, {
		method: method,
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json'
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(data)
	}).then(response => response.json()).then(data => action(data)).catch((e => error(e)));
}

export function get(url: string, action: Function, error: Function) {
	request(url, HttpMethod.get, {}, action, error);
}

export function post(url: string, data: {}, action: Function, error: Function) {
	request(url, HttpMethod.post, data, action, error);
}

export function put(url: string, data: {}, action: Function, error: Function) {
	request(url, HttpMethod.put, data, action, error);
}

export function patch(url: string, data: {}, action: Function, error: Function) {
	request(url, HttpMethod.patch, data, action, error);
}

export function deleteR(url: string, action: Function, error: Function) {
	request(url, HttpMethod.delete, {}, action, error);
}