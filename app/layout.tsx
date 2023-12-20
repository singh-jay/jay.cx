import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Analytics } from "@vercel/analytics/react";
// import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
	metadataBase: new URL("https://jay.cx"),
	title: {
		default: "Jay Singh",
		template: "%s | Jay Singh",
	},
	description: "Software Engineer, writer, and creator.",
	openGraph: {
		title: "Jay Singh",
		description: "Software Engineer, writer, and creator.",
		url: "https://jay.cx",
		siteName: "Jay Singh",
		locale: "en_IN",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Jay Singh",
		card: "summary_large_image",
	},
	// verification: {
	// 	google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
	// 	yandex: "14d2e73487fa6c71",
	// },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`scroll-smooth ${inter.className}`}>
			<body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
				<div className="fixed h-screen w-screen -z-1">
					<div id="blob" />
					<div id="blur" />
				</div>
				{children}
			</body>
		</html>
	);
}
