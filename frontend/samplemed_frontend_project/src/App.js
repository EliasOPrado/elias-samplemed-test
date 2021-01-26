import './App.css';
import {useState, useEffect} from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';

function App() {
  const [articles, setArticles] = useState([])
  const [editArticle, setEditArticle] = useState(null)

  useEffect(() =>{

    // adicione a url que voce esta usando do ALLOWED_HOST no Django settings.py
    fetch('http://127.0.0.1:8000/articles/', {
      'method': 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': 'Token 86a65a3b92e8f791fde3eac28f8cc6c130e44e1d'
      }
    })
    .then(resp => resp.json())
    .then(resp => setArticles(resp)
    ).catch(error => console.log(error))
  }, [])

  const updatedInformation = (article) => {
    const new_article = articles.map(myarticle => {
      if(myarticle.id === article.id){
        return article;
      }else {
        return myarticle;
      }
    })

    setEditArticle(new_article);
  }

  const articleForm = () => {
    setEditArticle({title: '', description: ''})
  }

  const editBtn = (article) => {
    setEditArticle(article)
  }

  const insertedInformation = (article) => {
    const new_articles = [...articles, article];
    setArticles(new_articles);
  }

  const deleteBtn = (article) => {
    const new_articles = articles.filter(myarticle => {
      if(myarticle.id === myarticle.id){
        return false;
      }
      return true;
    })

    setArticles(new_articles);
  }

  return (
    <div className="App">

      <div className="row">

      <div className="col">
       <h1>Samplemed Test - Blog</h1>
       <br/><br/>
       </div>
       <div className="col">
         <button onClick= {articleForm} className="btn btn-primary">Add Article</button>
       </div>
       </div>
      

      <ArticleList 
      articles={articles}
      editBtn={editBtn}
      deleteBtn={deleteBtn}
      />
  {editArticle ?   <Form 
                    article={editArticle}
                    updatedInformation = {updatedInformation}
                    insertedInformation = {insertedInformation}
                    /> 
                    : null}
      
    </div>
  );
}

export default App;
