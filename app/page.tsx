import About from "./components/Home/About";
import Experience from "./components/Home/Experience";
import Projects from "./components/Home/Projects";
// import Writing from "./components/Home/Writing";
import Header from "./components/Home/Header";
import Footer from "./components/Home/Footer";

{
	/* <head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width"></meta>
</script><title>Brittany Chiang</title><meta name="description" content="Brittany Chiang is a software engineer who builds accessible, inclusive products and digital experiences for the web."><meta name="image" content="https://brittanychiang.com/og.png"><meta property="og:locale" content="en_US"><meta property="og:site_name" content="Brittany Chiang"><meta property="og:type" content="website"><meta property="twitter:card" content="summary_large_image"><meta property="twitter:creator" content="@bchiang7"><meta property="twitter:site" content="@bchiang7"><meta property="og:title" content="Brittany Chiang"><meta property="og:description" content="Brittany Chiang is a software engineer who builds accessible, inclusive products and digital experiences for the web."><meta property="og:url" content="https://brittanychiang.com/"><meta property="og:image" content="https://brittanychiang.com/og.png"><meta property="twitter:title" content="Brittany Chiang"><meta property="twitter:description" content="Brittany Chiang is a software engineer who builds accessible, inclusive products and digital experiences for the web."><meta property="twitter:url" content="https://brittanychiang.com/"><meta property="twitter:image" content="https://brittanychiang.com/og.png"><link rel="icon" type="image/png" sizes="512x192" href="https://brittanychiang.com/favicon/android-chrome-512x512.png"><link rel="icon" type="image/png" sizes="192x192" href="https://brittanychiang.com/favicon/android-chrome-192x192.png"><link rel="apple-touch-icon" sizes="180x180" href="https://brittanychiang.com/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="https://brittanychiang.com/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="https://brittanychiang.com/favicon/favicon-16x16.png"><link rel="manifest" href="https://brittanychiang.com/favicon/site.webmanifest"><meta name="msapplication-TileColor" content="#0f172a"><meta name="theme-color" content="#0f172a"><meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk"><meta name="next-head-count" content="29"><link rel="preload" href="https://brittanychiang.com/_next/static/media/730e8169368baf37-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"><link rel="preload" href="https://brittanychiang.com/_next/static/media/f1f0c35b32161446-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"><link rel="preload" href="https://brittanychiang.com/_next/static/media/d593a8df799d4ab1-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"><link rel="preload" href="https://brittanychiang.com/_next/static/media/dc792b508e6f91c7-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"><link rel="preload" href="https://brittanychiang.com/_next/static/media/84d3493a9fd22f1c-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"><link rel="preload" href="https://brittanychiang.com/_next/static/media/fcb100c7607696fd-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"><link rel="preload" href="https://brittanychiang.com/_next/static/media/d90f295d0c348006-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"><link rel="preload" href="https://brittanychiang.com/_next/static/media/579e0f95cacfae57-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"><link rel="preload" href="https://brittanychiang.com/_next/static/media/828a494e04a45cbd-s.p.woff2" as="font" type="font/woff2" crossorigin="anonymous" data-next-font="size-adjust"><link rel="preload" href="./Brittany Chiang_files/f2449264126c18aa.css" as="style"><link rel="stylesheet" href="./Brittany Chiang_files/f2449264126c18aa.css" data-n-g=""><noscript data-n-css=""></noscript><script defer="" nomodule="" src="./Brittany Chiang_files/polyfills-c67a75d1b6f99dc8.js"></script><script src="./Brittany Chiang_files/webpack-5146130448d8adf7.js" defer=""></script><script src="./Brittany Chiang_files/framework-2c79e2a64abdb08b.js" defer=""></script><script src="./Brittany Chiang_files/main-342b3f0888afe918.js" defer=""></script><script src="./Brittany Chiang_files/_app-5531e5a306da5e32.js" defer=""></script><script src="./Brittany Chiang_files/664-09cd891ecc3af1d0.js" defer=""></script><script src="./Brittany Chiang_files/506-95c309a4d817bb8b.js" defer=""></script><script src="./Brittany Chiang_files/index-b54a377b87bfb79a.js" defer=""></script><script src="./Brittany Chiang_files/_buildManifest.js" defer=""></script><script src="./Brittany Chiang_files/_ssgManifest.js" defer=""></script></head> */
}

export default function Page() {
	return (
		<div className="group/spotlight relative">
			<div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
				<a
					href="https://brittanychiang.com/#content"
					className="absolute left-0 top-0 block -translate-x-full rounded bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 px-4 py-3 text-sm font-bold uppercase tracking-widest text-white focus-visible:translate-x-0"
				>
					Skip to Content
				</a>
				<div className="lg:flex lg:justify-between lg:gap-4">
					<Header />
					<main id="content" className="pt-24 lg:w-1/2 lg:py-24">
						<About />
						<Experience />
						<Projects />
						{/* <Writing /> */}
						<Footer />
					</main>
				</div>
			</div>
		</div>
	);
}
