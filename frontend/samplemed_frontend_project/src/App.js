import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [articles, setArticles] = useState([])

  useEffect(() =>{
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

  return (
    <div className="App">
      
       <h1>Samplemed Test - Blog</h1>
      
      {articles.map(article => {
        return (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
        )
      })}
    </div>
  );
}

export default App;
