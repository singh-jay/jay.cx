import { useEffect, useRef } from "react";

export const useIntersectionObserver = ({ observeElement, callback, config = { unobserveLastElement: true, options: {} } }) => {
	const observerRef = useRef<IntersectionObserver | null>(null);
	if (!observerRef.current && typeof IntersectionObserver !== "undefined") {
		const observerOptions = {
			root: null,
			rootMargin: "0px",
			threshold: 0,
			...config.options,
		};
		observerRef.current = new IntersectionObserver((entries) => {
			const first = entries[0];
			if (first.isIntersecting) {
				const id = first.target.id;
				callback(id);
			}
		}, observerOptions);
	}

	// clean up
	useEffect(() => {
		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, []);

	useEffect(() => {
		const currentElementToObserve = observeElement;
		const observer = observerRef.current;

		if (observer && currentElementToObserve) {
			if (Array.isArray(currentElementToObserve)) {
				for (const element of currentElementToObserve) {
					observer.observe(element);
				}
			} else {
				observer.observe(currentElementToObserve);
			}
		}

		return () => {
			if (observer && currentElementToObserve && config.unobserveLastElement) {
				if (Array.isArray(currentElementToObserve)) {
					for (const element of currentElementToObserve) {
						observer.unobserve(element);
					}
				} else {
					observer.unobserve(currentElementToObserve);
				}
			}
		};
	}, [observeElement]);

	return;
};
