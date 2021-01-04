import { useState, useEffect, useRef } from "react";

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25,
};
const useObserver = (isObserve) => {
    const ref = useRef();
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            isObserve && entry.intersectionRatio > 0
                ? setIntersecting(true)
                : setIntersecting(false);
        }, options);
        const elem = ref?.current;
        if (elem) {
            observer.observe(elem);
        }
        return () => {
            observer.unobserve(elem);
        };
    }, [ref, isObserve]);

    return [ref, isIntersecting];
};

export default useObserver;
