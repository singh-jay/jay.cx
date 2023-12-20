import React, { forwardRef } from "react";
import UpArrowIcon from "./UpArrowIcon";

const Experience = forwardRef<HTMLElement>(function Experience(_, ref) {
	return (
		<section ref={ref} id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
			</div>
			<div>
				<ol className="group/list">
					<li className="mb-12">
						<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
							<header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2022 to Present">
								2022 — Present
							</header>
							<div className="z-10 sm:col-span-6">
								<h3 className="font-medium leading-snug text-slate-200">
									<div>
										<a
											className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
											href="https://www.infoedge.in"
											target="_blank"
											rel="noreferrer noopener"
											aria-label="Senior Software Engineer at Info Edge (opens in a new tab)"
										>
											<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
											<span>
												Senior Software Engineer · Info Edge
												<span className="inline-block">
													<UpArrowIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
												</span>
											</span>
										</a>
									</div>
								</h3>
								<ul className="mt-2 text-sm leading-normal list-disc">
									<li>
										Developed a modern and user-friendly jobseeker product for BigShyft, leveraging Next.js, Tailwind CSS, and an in-house design system. This revamp resulted in
										improved user experience and increased engagement on the platform.
									</li>
									<li>
										Implemented a candidate recommendation system and interview scheduling feature in the agent app, resulting in improved efficiency and accuracy of candidate
										matching and streamlining the interview process.
									</li>
									<li>
										Developed TechMinis web application using Next.js and Tailwind CSS, focusing on optimizing app performance and achieving high core web vitals scores for an
										enhanced user experience.
									</li>
								</ul>
								<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div>
									</li>

									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TypeScript</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Next.js</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TailwindCSS</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SCSS</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="mb-12">
						<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
							<header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2021 to 2022">
								2021 — 2022
							</header>
							<div className="z-10 sm:col-span-6">
								<h3 className="font-medium leading-snug text-slate-200">
									<div>
										<a
											className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
											href="https://www.rsgmedia.com"
											target="_blank"
											rel="noreferrer noopener"
											aria-label="Software Engineer at RSG Media (opens in a new tab)"
										>
											<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
											<span>
												Software Engineer · RSG Media
												<span className="inline-block">
													<UpArrowIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
												</span>
											</span>
										</a>
									</div>
								</h3>
								<ul className="mt-2 text-sm leading-normal list-disc">
									<li>Designed user-friendly UI pages using Ant Design React UI and AG Grid library, resulting in an enhanced user experience.</li>
									<li>
										Developed and maintained a robust REST API stack using Express.js, Objection.js, Redis and Postgres DB, Implemented caching mechanisms to improve response time
										and reduce server load, resulting in enhanced user experience and increased system scalability.
									</li>
									<li>
										Implemented containerization strategies using Docker to enhance scalability and portability of applications, resulting in improved deployment efficiency and
										reduced resource consumption.
									</li>
								</ul>
								<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Ant Design</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Node</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">PostgreSQL</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Kafka</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Docker</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
					<li className="mb-12">
						<div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
							<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
							<header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2019 to 2021">
								2019 — 2021
							</header>
							<div className="z-10 sm:col-span-6">
								<h3 className="font-medium leading-snug text-slate-200">
									<div>
										<a
											className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
											href="https://www.restolabs.com"
											target="_blank"
											rel="noreferrer noopener"
											aria-label="Software Engineer at Restolabs (opens in a new tab)"
										>
											<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
											<span>
												Software Engineer · Restolabs
												<span className="inline-block">
													<UpArrowIcon className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" />
												</span>
											</span>
										</a>
									</div>
								</h3>
								<ul className="mt-2 text-sm leading-normal list-disc">
									<li>
										Developed intuitive and responsive user interfaces using React, Vue, Angular, MUI, and SCSS, resulting in enhanced user experience and improved overall
										performance of the applications.
									</li>
									<li>Developed and maintained a high-performance REST API stack for RestoLabs, ensuring seamless integration with frontend and efficient data retrieval.</li>
									<li>
										Developed and maintained hybrid mobile apps using the Ionic framework, resulting in improved user experience and increased customer satisfaction for RestoLabs'
										mobile app users.
									</li>
								</ul>
								<ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Angular</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Vue</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TailwindCSS</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">SCSS</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Ionic</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Node</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">PHP</div>
									</li>
									<li className="mr-1.5 mt-2">
										<div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">MySQL</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
				</ol>
				<div className="mt-12">
					<a className="inline-flex items-center leading-tight text-slate-200 font-semibold group" aria-label="View Full Résumé" target="_blank" href="/Jay_Singh_Resume.pdf">
						<span>
							<span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">View Full </span>
							<span className="whitespace-nowrap">
								<span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Résumé</span>
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
				</div>
			</div>
		</section>
	);
});

export default Experience;
