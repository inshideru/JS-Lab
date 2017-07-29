const firstView = setJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' });
/*
axios.get('https://swapi.co/api/people/1/')
    .then(json => {
        firstView(json.data)
    })
    .catch(err => {
        console.log('Deu ruim aqui', JSON.stringify(err.toString()))
        firstView({Erro: JSON.stringify(err.toString())})
    })
*/

topWell.innerHTML = moment().format('LLLL');

const hello = function (name) {
  return function (greet) {
    return `Hello, ${name}! ${greet}`;
  };
};

const frase = hello('Paulo')('How are you?');
console.log(frase);
firstView({ greet: frase });

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const g = n => n + 1;
const f = n => n * 2;

const trace = label => value => {
  console.log(`${label}: ${value}`);
  return value;
};

const doStuffBetter = pipe(
  g,
  trace('after g'),
  f,
  trace('after f')
);
doStuffBetter(5);

debugView(`axios.get('https://swapi.co/api/people/1/')
    .then(json => {
        firstView(json.data)
    })
    .catch(err => {
        console.log('Deu ruim aqui', JSON.stringify(err.toString()))
        firstView({Erro: JSON.stringify(err.toString())})
    })`);