export function isValidEmail(email: string): boolean {
	const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	return emailPattern.test(email);
}

export function isEmpty(obj: object): boolean {
	if (!obj) return true;

	return Object.keys(obj).length === 0;
}
