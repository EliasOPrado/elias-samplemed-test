
export default class APIService {
    static updateArticle(article_id, body) {
        return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
            'method': 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Token 86a65a3b92e8f791fde3eac28f8cc6c130e44e1d'
              },
              body:JSON.stringify(body)
        }).then(resp => resp.json())

    }

    static insertArticle(body){
        return fetch('http://127.0.0.1:8000/articles/', {
            'method': 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Token 86a65a3b92e8f791fde3eac28f8cc6c130e44e1d'
              },
              body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteArticle(article_id){
        return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
            'method': 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Token 86a65a3b92e8f791fde3eac28f8cc6c130e44e1d'
              },
              
        })
    }
}