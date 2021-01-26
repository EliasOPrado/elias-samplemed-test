import React from 'react';

function ArticleList(props) {

    const editBtn = (article) => {
        props.editBtn(article)
    }
    return (
        <div>
            {props.articles && props.articles.map(article => {
        return (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>

            <div className="row">
                <div className="col-md-1">
                    <button className="btn btn-primary" onClick= {() => editBtn(article)}>Update</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-warning">Delete</button>
                </div>
            </div>

          <hr style={{'borderColor':'white'}}/>
        </div>
        )
      })}
        </div>
    )
}

export default ArticleList;
