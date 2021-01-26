import React, {useState, useEffect} from 'react'

function Form(props) {
    const [title, setTitle] = useState(props.article.title)
    const [description, setDescription] = useState(props.article.description)
   
    const updateArticle = () => {
        
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

                    <button onClick={updateArticle} className="btn btn-success">Update this article</button>
                </div>
           ): null }
        </div>
    )
}

export default Form
