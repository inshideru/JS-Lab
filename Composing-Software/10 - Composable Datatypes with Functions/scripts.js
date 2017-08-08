const firstView = setJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' }, 'Manero');
topWell.innerHTML = 'In JavaScript, the easiest way to compose is function composition, and a function is just an object you can add methods to. ';

const t = value => {
  const fn = () => value;
  fn.toString = () => `t(${ value })`;
  return fn;
};

const someValue = t(2);
console.log(
  someValue.toString() // "t(2)"
);

// /////////////////////////////////////////////////////////////
axios.get(`${window.location.href}/scripts.js`)
  .then(json => {
    debugView(json.data, 'Conteúdo do arquivo script.js');
  })
  .catch(err => {
    console.log('Deu ruim aqui', JSON.stringify(err.toString()));
    firstView({Erro: JSON.stringify(err.toString())});
  });
