export interface ContactInfo {
	name: string;
	nickname: string;
	email: string;
	links: Links;
	phoneNumber: string;
	location: string;
	title: string;
	about: string;
}

export interface Links {
	github: string;
	linkedin: string;
}
