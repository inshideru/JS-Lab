const firstView = setJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' }, 'Manero');
topWell.innerHTML = 'Functional mixins are composable factory functions which connect together in a pipeline; each function adding some properties or behaviors like workers on an assembly line. Functional mixins don’t depend on or require a base factory or constructor: Simply pass any arbitrary object into a mixin, and an enhanced version of that object will be returned.';

class User {
  constructor ({userName, avatar}) {
    this.userName = userName;
    this.avatar = avatar;
  }
}
const currentUser = new User({
  userName: 'Foo',
  avatar: 'foo.png'
});
User.prototype = {};
console.log(
  currentUser instanceof User, // <-- false -- Oops!
  // But it clearly has the correct shape:
  // { avatar: "foo.png", userName: "Foo" }
  currentUser
);

// Return an empty instance of any object type?
const empty = ({ constructor } = {}) => constructor ?
  new constructor() :
  undefined;

const foo = [10];
console.log(
  empty(foo) // []
);

// Return an empty instance of any type?
// const empty = ({ constructor } = {}) => constructor ?
//   new constructor() :
//   undefined
// ;
// const foo = Promise.resolve(10);
// console.log(
//   //empty(foo) // [TypeError: Promise resolver undefined is
//              //  not a function]
// );

// /////////////////////////////////////////////////////////////
axios.get(`${window.location.href}/scripts.js`)
  .then(json => {
    debugView(json.data, 'Conteúdo do arquivo script.js');
  })
  .catch(err => {
    console.log('Deu ruim aqui', JSON.stringify(err.toString()));
    firstView({Erro: JSON.stringify(err.toString())});
  });
