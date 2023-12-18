import React from "react";

const About = () => {
	return (
		<section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
			</div>
			<div>
				<p className="mb-4">
					Back in 2017, I decided to try my hand at crafting a website for my college fest and went into the rabbit hole of coding and web development. Fast-forward to today, and
					I’ve had the privilege of building software for a{" "}
					<a
						className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
						href="https://www.bigshyft.com/"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="advertising agency (opens in a new tab)"
					>
						recruitment business
					</a>
					, a{" "}
					<a
						className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
						href="https://www.rsgmedia.com"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="start-up (opens in a new tab)"
					>
						Saas company
					</a>
					, and a{" "}
					<a
						className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
						href="https://www.restolabs.com"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="huge corporation (opens in a new tab)"
					>
						start-up
					</a>
					.
				</p>
				<p className="mb-4">
					My main focus these days is building products at{" "}
					<a
						className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
						href="https://www.infoedge.in"
						target="_blank"
						rel="noreferrer noopener"
						aria-label="Info Edge (opens in a new tab)"
					>
						Info edge
					</a>
					.
				</p>
				<p>
					When I’m not at the computer, I’m usually hanging out with my friends, watching movies or tv series, or playing online video games
					{/* <span className="group/korok inline-flex lg:font-medium lg:text-slate-200">
						<span className="sr-only">Korok seeds</span>
						<span className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]" aria-hidden="true">
							K
						</span>
						<span className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]" aria-hidden="true">
							o
						</span>
						<span className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]" aria-hidden="true">
							r
						</span>
						<span className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]" aria-hidden="true">
							o
						</span>
						<span className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]" aria-hidden="true">
							k
						</span>
						<span className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]" aria-hidden="true">
							&nbsp;
						</span>
						<span className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]" aria-hidden="true">
							s
						</span>
						<span className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]" aria-hidden="true">
							e
						</span>
						<span className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]" aria-hidden="true">
							e
						</span>
						<span className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]" aria-hidden="true">
							d
						</span>
						<span className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]" aria-hidden="true">
							s
						</span>
					</span> */}
					.
				</p>
			</div>
		</section>
	);
};

export default About;
