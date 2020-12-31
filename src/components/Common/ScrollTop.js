import { useEffect } from "react";
const ScrollTop = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);
    return null;
};

export default ScrollTop;
