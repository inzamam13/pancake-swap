

export default (path, body, method = "POST", headers) => {
    let options = {
        method,
        headers: headers || {
            'Content-type': 'application/json'
        },
    }
    
    if (body) {
        options.body = JSON.stringify(body)
    }
    return fetch(path, options)
        .then(res => res.json())
        .then(json => {
            return json

        })
        .catch(err => {
            return {
                success: false,
                message: err.message
            }
        })
}