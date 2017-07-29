const firstView = setJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' });
debugView(firstView);
topWell.innerHTML = moment().format('LLLL');

const compose = f => g => x => f(g(x));

const double = n => n * 2;
const inc = n => n + 1;

const result = compose(double)(inc)(3);

firstView({ result});
debugView(`compose = ${compose}`);
