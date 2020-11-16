import { useState, useCallback } from "react";

const useOpen = (initialValue) => {
    const [isOpen, setIsOpen] = useState(initialValue);

    const onClickOpen = useCallback(() => setIsOpen(true), []);
    const onClickClose = useCallback(() => setIsOpen(false), []);

    return [isOpen, onClickOpen, onClickClose];
};

export default useOpen;
