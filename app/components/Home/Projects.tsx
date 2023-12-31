import Image from "next/image";
import bigshyft from "public/images/Bigshyft.png";
import bigshyftRecruiter from "public/images/Bigshyft_Recruiter.png";
import techminis from "public/images/Techminis.png";
import { forwardRef } from "react";
import UpArrowIcon from "./UpArrowIcon";

const Projects = forwardRef<HTMLElement>(function Projects(_, ref) {
	return (
		<section ref={ref} id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
			</div>
			<div>
				<ul className="group/projects">
					<li className="mb-12">
						<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/projects:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
							<div className="z-10 sm:order-2 sm:col-span-6">
								<h3>
									<a
										className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
										href="https://www.bigshyft.com/"
										target="_blank"
										rel="noreferrer noopener"
										aria-label="BigShyft App (opens in a new tab)"
									>
										<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
										<span>
											BigShyft
											<span className="inline-block">
												<UpArrowIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
											</span>
										</span>
									</a>
								</h3>
								<p className="mt-2 text-sm leading-normal">
									BigShyft is a premium job searching platform where users can register and apply to openings at top companies, Delivered a new feature JS enhanced profile and
									currently working on the product revamp using Next.js and tailwind CSS, and an in-house design system.
								</p>
								<ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Next.js</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TailwindCSS</div>
									</li>
								</ul>
							</div>
							<Image
								alt="BigShyft App card"
								loading="lazy"
								width="200"
								height="48"
								decoding="async"
								data-nimg="1"
								className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
								src={bigshyft}
							/>
						</div>
					</li>
					<li className="mb-12">
						<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/projects:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
							<div className="z-10 sm:order-2 sm:col-span-6">
								<h3>
									<a
										className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
										href="https://recruiter.bigshyft.com/"
										target="_blank"
										rel="noreferrer noopener"
										aria-label="BigShyft Recruiter (opens in a new tab)"
									>
										<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
										<span>
											BigShyft Recruiter
											<span className="inline-block">
												<UpArrowIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
											</span>
										</span>
									</a>
								</h3>
								<p className="mt-2 text-sm leading-normal">
									BigShyft Recruiter platform is specially designed for recruiters to easily create a new mandate and find the best matching AAA candidates based on the mandate
									requirements. Implemented advanced filters and advance search functionality on AAA listing pages and mandate pages.
								</p>
								<ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Redux</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SCSS</div>
									</li>
								</ul>
							</div>
							<Image
								alt="BigShyft Recruiter card"
								loading="lazy"
								width="200"
								height="48"
								decoding="async"
								data-nimg="1"
								className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
								src={bigshyftRecruiter}
							/>
						</div>
					</li>
					<li className="mb-12">
						<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/projects:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
							<div className="z-10 sm:order-2 sm:col-span-6">
								<h3>
									<a
										className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
										href="https://techminis.com/"
										target="_blank"
										rel="noreferrer noopener"
										aria-label="Techminis (opens in a new tab)"
									>
										<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
										<span>
											Techminis
											<span className="inline-block">
												<UpArrowIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
											</span>
										</span>
									</a>
								</h3>
								<p className="mt-2 text-sm leading-normal">
									TechMinis is a dynamic tech news website, utilizing a wide range of tools including React, Next.js, and Tailwind CSS. Implemented various features such as
									infinite scroll for news articles, bookmarking, sharing, personalized recommendations based on user preferences, dark and light mode options.
								</p>
								<ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Next.js</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TypeScript</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TailwindCSS</div>
									</li>
								</ul>
							</div>
							<Image
								alt="Techminis card"
								loading="lazy"
								width="200"
								height="48"
								decoding="async"
								data-nimg="1"
								className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
								src={techminis}
							/>
						</div>
					</li>
				</ul>
				{/* <div className="mt-12">
					<a className="inline-flex items-center font-medium leading-tight text-slate-200 group" aria-label="View Full Project Archive" href="https://brittanychiang.com/archive">
						<span>
							<span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full Project </span>
							<span className="whitespace-nowrap">
								<span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archive</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
										clip-rule="evenodd"
									></path>
								</svg>
							</span>
						</span>
					</a>
				</div> */}
			</div>
		</section>
	);
});

export default Projects;
