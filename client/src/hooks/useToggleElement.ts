import { useState, useEffect, useRef, MouseEvent } from "react";

const useToggleElement = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef<any>(null);
    
    const handleElement = () => {
        setIsOpen(!isOpen);
    }

    const handleClickOutside = (e: any) => {
        if(isOpen && ref.current && !ref.current.contains(e.target)) {
            handleElement();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    })

    return { isOpen, handleElement, ref };
}

export default useToggleElement;