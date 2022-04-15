import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
    sidemenuOpen: boolean;
    isadding: boolean;
    isDragging: boolean;
}


const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isadding: false,
    isDragging: false
}


export const UIProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer, UI_INITIAL_STATE );


    const openSideMenu = () => {
        dispatch({ type: 'UI - Open Sidebar' });
    }

    const closeSideMenu = () => dispatch({ type: 'UI - Close Sidebar' })

    const setIsAdding = (isAdding: boolean) => dispatch({ type: 'UI - Set Is Adding', payload: isAdding }) ;

    const startDragging = () => {
        dispatch({ type: 'UI - Start Dragging' });
    }
    const endDragging = () => {
        dispatch({ type: 'UI - End Dragging' });
    }


    return (
        <UIContext.Provider value={{
            //Destructure the  state
            ...state,
            // Methods
            closeSideMenu,
            openSideMenu,
            setIsAdding,
            startDragging,
            endDragging
        }}>
            { children }
        </UIContext.Provider>
    )
};