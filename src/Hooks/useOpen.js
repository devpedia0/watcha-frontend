import { useState, useCallback } from "react";

const useOpen = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onClickOpen = useCallback(() => {
        return setIsOpen(true);
    }, []);
    const onClickClose = useCallback(() => {
        return setIsOpen(false);
    }, []);

    return [isOpen, onClickOpen, onClickClose];
};

export default useOpen;
