import React, { createContext, useState, useReducer } from "react"
import { articleReducer } from '../reducer/articleReducer';
export const ArticleContext = createContext();

const ArticleProvider = ({ children }) => {
    const [articles, dispatch] = useReducer(articleReducer, [
        { id: 1, title: "post 1", body: "Quisque cursus, metus vitae pharetra" },
        { id: 2, title: "post 2", body: "init value" }
    ]);

    return (
        <ArticleContext.Provider value={{ articles, dispatch }}>
            {children}
        </ArticleContext.Provider>
    )
}
export default ArticleProvider