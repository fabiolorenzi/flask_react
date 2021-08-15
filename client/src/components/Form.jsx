import React, { useState } from "react";

function Form({article}) {
    const [newArticle, setNewArticle] = useState({
        title: "",
        body: "",
        id: article.id,
        date: new Date()
    });

    const handleChange = (e) => {
        e.preventDefault();

        setNewArticle({...newArticle, [e.target.name]: e.target.value});
    };

    const submit = (e) => {
        e.preventDefault();
        fetch("http://127.0.0.1:5000/update/" + article.id, {
            "method": "PUT",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify(newArticle)
        })
        .then(resp => resp.json())
        .catch(err => console.log(err));
        window.location.reload();
    };

    return(
        <div className="formContainer">
            <form onSubmit={submit}>
                <input type="text" placeholder="title" name="title" value={newArticle.title} onChange={handleChange} />
                <input type="text" placeholder="body" name="body" value={newArticle.body}  onChange={handleChange} />
                <button type="submit">UPDATE</button>
            </form>
        </div>
    );
};

export default Form;