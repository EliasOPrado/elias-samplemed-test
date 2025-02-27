import React, {useState, useEffect} from 'react';
import APIService from '../components/APIService';
import {useCookies} from 'react-cookie';
import {useHistory} from 'react-router-dom';

function Form(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState(props.article.description)
    const [token] = useCookies(['mytoken'])
   
    useEffect(() => {
        setTitle(props.article.title)
        setDescription(props.article.description)
    }, [props.article])

    const updateArticle = () => {
        APIService.updateArticle(props.article.id, {title, description}, token['mytoken'])
        .then(resp => props.updatedInformation(resp));
    }

    const insertArticle = () => {
        APIService.insertArticle({title, description}, token['mytoken'])
        .then(resp => props.insertedInformation(resp));
    }

    return (
        <div>
            {props.article ? (
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    
                    <input 
                    type="text" 
                    className="form-control" 
                    id="title" 
                    placeholder="Update title" 
                    value={title}
                    onChange= {e => setTitle(e.target.value)}
                     />

                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea 
                    className="form-control"
                    id="description" 
                    placeholder="Update description" 
                    rows="5"
                    value={description}
                    onChange= {e => setDescription(e.target.value)}
                    >
                    </textarea>
                    <br/>

                    {
                        props.article.id ? 
                         <button onClick={updateArticle} className="btn btn-success">Update this article</button>
                        :
                        <button onClick={insertArticle} className="btn btn-success">Add Article</button>
                    }

                   
                </div>
           ): null }
        </div>
    )
}

export default Form
