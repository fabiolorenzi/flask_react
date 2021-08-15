import React, { useState } from "react";

function AddArticleForm() {
    const [article, setArticle] = useState({
        title: "",
        body: ""
    });

    const handleChange = e => {
        e.preventDefault();
        setArticle({...article, [e.target.name]: e.target.value});
    };

    const submitter = () => {
        fetch("http://127.0.0.1:5000/add", {
            "method": "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(article)
        })
        .then(resp => resp.json())
        .catch(err => console.log(err));
        window.location.reload();
    };

    return(
        <div className="addArticle">
            <form onSubmit={submitter}>
                <input type="text" placeholder="title" name="title" value={article.title} onChange={handleChange} />
                <input type="text" placeholder="body" name="body" value={article.body} onChange={handleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddArticleForm;