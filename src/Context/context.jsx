import React, {createContext, useState} from "react";

export const Context = createContext({});

const ToDoProvider = ({children}) => {

    const [toDoState, setToDoState] = useState([])
    const [isBlock, setIsBlock] = useState(true)

    const handleListSwitcher = () => {
        setIsBlock(false);
    }

    const handleBlockSwitcher = () => {
        setIsBlock(true)
    }

    return (
        <Context.Provider value={{
            toDoState,
            isBlock,
            handleListSwitcher,
            handleBlockSwitcher
        }}>
            {children}
        </Context.Provider>
    )
}

export default ToDoProvider
