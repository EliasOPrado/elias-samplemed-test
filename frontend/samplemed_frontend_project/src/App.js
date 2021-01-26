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

  const editBtn = (article) => {
    setEditArticle(article)
  }

  return (
    <div className="App">
      
       <h1>Samplemed Test - Blog</h1>
       <br/><br/>
      <ArticleList 
      articles={articles}
      editBtn={editBtn}
      />
  {editArticle ?   <Form article={editArticle}/> : null}
      
    </div>
  );
}

export default App;
