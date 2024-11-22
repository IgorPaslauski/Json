const url = "https://jsonplaceholder.typicode.com/posts";

// GET
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
    });

// POST
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));

// Para executar o código acima, você pode usar o comando abaixo.
// cd "caminho do projeto"
// node app.js