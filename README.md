# JS Lab
JavaScript Lab &amp; Playground


```javascript
axios.get('https://swapi.co/api/people/1/')
    .then(json => {
        firstView(json.data)
    })
    .catch(err => {
        console.log('Deu ruim aqui', JSON.stringify(err.toString()))
        firstView({Erro: JSON.stringify(err.toString())})
    })
```