export default function capitalizeString(str: string): string {
	if (str.length < 1) return str.toLocaleUpperCase();
	return str.charAt(0).toLocaleUpperCase() + str.slice(1).toLocaleLowerCase();
}
