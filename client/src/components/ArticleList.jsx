import React, { useState } from "react";
import Form from "./Form.jsx";

function ArticleList({list}) {

    const [update, setUpdate] = useState(false);

    const updater = e => {
        e.preventDefault();
        setUpdate(!update);
    };

    const deleter = (e, id) => {
        e.preventDefault();
        fetch(`http://127.0.0.1:5000/delete/${id}`, {
            "method": "DELETE",
            headers: {
                "Content-Type": "Application/json"
            }
        })
        .then(res => console.log("removed"))
        .catch(err => console.log(err));
        window.location.reload();
    };

    return(
        <div className="articleListContainer">
            {list ? list.map(article => {
                return <div key={article.id}>
                    <h2>{article.title}</h2>
                    <h4>{article.body}</h4>
                    <p>{article.date}</p>
                    <div className="buttonArea">
                        <button onClick={updater}>Update</button>
                        <button onClick={e => deleter(e, article.id)}>Delete</button>
                    </div>
                    {update ? <div><Form article={article} /></div> : null}
                </div>
            }) : ""}
        </div>
    );
};

export default ArticleList;