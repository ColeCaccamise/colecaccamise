export function formatDate(dateString: string) {
	try {
		const dateParts = dateString.split('-');
		const year = parseInt(dateParts[0], 10);
		const month = parseInt(dateParts[1], 10) - 1;
		const day = parseInt(dateParts[2], 10);

		const date = new Date(year, month, day);

		if (isNaN(date.getTime())) {
			throw new Error('Invalid date');
		}

		return new Intl.DateTimeFormat('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric',
		}).format(date);
	} catch (error) {
		console.error('Invalid date format:', dateString);
		return dateString;
	}
}
