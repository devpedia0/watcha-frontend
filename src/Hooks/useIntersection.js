import { useState, useEffect } from "react";

function useIntersection(ref, initFetch) {
    // State and setter for storing whether element is visible
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                entry.intersectionRatio > 0 && initFetch
                    ? setIntersecting(true)
                    : setIntersecting(false);
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.25,
            }
        );
        const elem = ref?.current;
        if (elem) {
            observer.observe(elem);
        }
        return () => {
            observer.unobserve(elem);
        };
    }, [ref, initFetch]);

    return [isIntersecting, setIntersecting];
}

export default useIntersection;
