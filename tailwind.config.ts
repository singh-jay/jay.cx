import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
	content: ["./app/**/*.{ts,tsx}", "./content/**/*.mdx"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-inter)"],
			},
			typography: {
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": { content: "none" },
						"blockquote p:first-of-type::after": { content: "none" },
					},
				},
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [typography],
} satisfies Config;