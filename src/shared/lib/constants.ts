import { branding } from "~/config/branding";

export const baseUrl = branding.url;

export function getMetadata() {
	return {
		title: `${branding.name} | Agencia de Marketing B2B para Software e IA`,

		description: `${branding.name} es una agencia de marketing especializada en captación de clientes B2B para empresas de desarrollo de software y agencias de IA. Resultados en los primeros 2 meses.`,

		name: branding.name,

		longName: `${branding.name} | Marketing B2B para Empresas Tecnológicas`,

		slogan: branding.slogan,

		picture: branding.assets.logo,

		getInTouch: {
			label: "Agenda una asesoría",

			short_label: "Agenda llamada",

			href: branding.contact.calendlyUrl,
		},

		tags: [
			branding.name,

			"Marketing B2B",

			"Captación de Clientes",

			"Marketing para Agencias de IA",

			"Software Marketing",

			"Inteligencia Artificial Marketing",

			"Agencia Marketing Tecnológico",

			"Lead Generation B2B",

			"Estrategia B2B",

			"CRM",

			"Automatización Marketing",

			"Campañas Publicitarias B2B",

			"Empresas Tecnológicas",

			branding.location.city,

			branding.location.country,
		],

		links: {
			website: branding.url,

			twitter: branding.social.twitter,

			linkedin: branding.social.linkedin,

			email: `mailto:${branding.contact.email}`,
		},

		homeOgImage: branding.assets.thumbnail,
	};
}

export const defaultLocale = "es";
