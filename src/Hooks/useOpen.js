import { useState, useCallback } from "react";

const useOpen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickOpen = useCallback(() => {
        console.log("?");
        return setIsOpen(true);
    }, []);
    const onClickClose = useCallback(() => {
        console.log("??");
        return setIsOpen(false);
    }, []);

    return [isOpen, onClickOpen, onClickClose];
};

export default useOpen;
