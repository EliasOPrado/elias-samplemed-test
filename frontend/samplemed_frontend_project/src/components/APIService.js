
export default class APIService {
    static updateArticle(article_id, body, token) {
        return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
            'method': 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Token ${token}`
              },
              body:JSON.stringify(body)
        }).then(resp => resp.json())

    }

    static insertArticle(body, token){
        return fetch('http://127.0.0.1:8000/articles/', {
            'method': 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Token ${token}`
              },
              body:JSON.stringify(body)
        }).then(resp => resp.json())
    }

    static DeleteArticle(article_id, token){
        return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
            'method': 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Token ${token}`
              },
              
        })
    }

    static LoginUser(body){
        return fetch('http://127.0.0.1:8000/auth/', {
            'method': 'POST',
            headers: {
                'content-type': 'application/json',
                
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json())
    }
}