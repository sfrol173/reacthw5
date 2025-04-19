import React from "react";
import ToDoProvider from "../Context/context.jsx";
import Main from "../compositions/Main/Main.jsx";

const MenShopPage = () => {

    return (
        <ToDoProvider>
            <Main/>
        </ToDoProvider>
    )
}

export default MenShopPage