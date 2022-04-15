import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean;
    isadding: boolean
    isDragging: boolean;
    // Methods
    closeSideMenu: () => void;
    openSideMenu: () => void;
    setIsAdding: (isAdding: boolean) => void;
    startDragging: () => void;
    endDragging: () => void;
}


export const UIContext = createContext({} as ContextProps );