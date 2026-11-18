export const branding = {
	// Información de marca
	name: "CyberImpulsa",
	slogan: "Agencia de marketing B2B para empresas de desarrollo de software y agencias de IA",
	legalName: "Cyberimpulsa LLC",
	domain: "cyberimpulsa.com",
	url: "https://cyberimpulsa.com",

	// Contacto
	contact: {
		calendlyUrl: "https://calendly.com/cyberimpulsa/llamada",
		phones: [
			{ number: "34633857457", display: "+34 633 857 457" },
			{ number: "376332902", display: "+376 332 902" },
		],
		email: "cyberimpulsa@gmail.com",
	},

	// Redes sociales
	social: {
		linkedin: "https://www.linkedin.com/company/cyberimpulsa",
		instagram: "https://instagram.com/cyberimpulsa",
		facebook: "https://facebook.com/profile.php?id=61583000255903",
		googleBusiness: "https://maps.app.goo.gl/ogsLd5LiiuMMSBcL6",
	},

	// Ubicación
	location: {
		city: "Barcelona",
		country: "España",
	},

	// Assets
	assets: {
		logo: "/assets/media/branding/iso.svg",
		thumbnail: "/assets/media/branding/og-image.png",
	},
} as const;

// Tipo derivado para TypeScript
export type Branding = typeof branding;
