import React, { useState, useEffect } from "react";

import ArticleList from "./components/ArticleList.jsx";
import AddArticleForm from "./components/AddArticleForm.jsx";

function App() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/get", {
                "method": "GET",
                headers: {
                    "Content-Type": "Application/json"
                }
            } 
        )
        .then(resp => resp.json())
        .then(json => setArticles(json))
        .catch(err => console.log(err))
    }, []);

    return(
        <div className="appContainer">
            <h1>Hello World</h1>
            <AddArticleForm />
            <ArticleList list={articles} />
        </div>
    );
};

export default App;