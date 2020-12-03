import { useState, useEffect, useRef } from "react";

const useOnScreen = (rootMargin = "0px") => {
    const ref = useRef();
    const [isShow, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setShow(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            observer.unobserve(ref.current);
        };
    }, [ref, rootMargin]);

    return [ref, isShow];
};

export default useOnScreen;
