const firstView = setJSONView('syntaxHighlight');
const jsonView = addJSONView('syntaxHighlight');
const debugView = setCodeView('debug');
const topWell = document.getElementById('top-well');

firstView({ manero: 'cara' }, 'Manero');
topWell.innerHTML = 'A factory function is any function which is not a class or constructor that returns a (presumably new) object. In JavaScript, any function can return an object. When it does so without the new keyword, it’s a factory function.';

const createUser = ({ userName, avatar }) => ({
  userName,
  avatar,
  setUserName(userName) {
    this.userName = userName;
    return this;
  }
});
firstView(createUser({ userName: 'echo', avatar: 'echo.png' }), "createUser({ userName: 'echo', avatar: 'echo.png' })");
debugView();
const noop = () => {
  foo: 'bar';};
jsonView(noop(), 'noop()'); // undefined
const createFoo = () => ({ foo: 'bar' });
jsonView(createFoo(), 'createFoo()'); // { foo: "bar" }

const swap = ([first, second]) => [second, first];
jsonView(swap([1, 2])); // [2, 1]

const rotate = ([first, ...rest]) => [...rest, first];
jsonView(rotate([1, 2, 3])); // [2, 3, 1]

const key = 'avatar';
// jsonView( user[key] ); // "echo.png"

const arrToObj = ([key, value]) => ({ [key]: value });
jsonView(arrToObj([ 'foo', 'bar' ])); // { "foo": "bar" }

const createAnotherUser = ({ userName = 'Anonymous', avatar = 'anon.png' } = {}) => ({
userName, avatar});

jsonView(
  // { userName: "echo", avatar: 'anon.png' }
  createAnotherUser({ userName: 'echo' })
);

jsonView(
  // { userName: "Anonymous", avatar: 'anon.png' }
  createAnotherUser()
);

// Factory Functions for Mixin Composition /////////////////////////////

const withConstructor = constructor => o => {
  const proto = Object.assign({},
    Object.getPrototypeOf(o),
    { constructor}
  );
  return Object.assign(Object.create(proto), o);
};

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
// or `import pipe from 'lodash/fp/flow';`
// Set up some functional mixins
const withFlying = o => {
  let isFlying = false;
  return {
    ...o,
    fly () {
      isFlying = true;
      return this;
    },
    land () {
      isFlying = false;
      return this;
    },
    isFlying: () => isFlying
  }
};
const withBattery = ({ capacity }) => o => {
  let percentCharged = 100;
  return {
    ...o,
    draw (percent) {
      const remaining = percentCharged - percent;
      percentCharged = remaining > 0 ? remaining : 0;
      return this;
    },
    getCharge: () => percentCharged,
    get capacity () {
      return capacity
    }
  };
};
const createDrone = ({ capacity = '3000mAh' }) => pipe(
  withFlying,
  withBattery({ capacity }),
  withConstructor(createDrone)
)({});
const myDrone = createDrone({ capacity: '5500mAh' });
console.log(`
  can fly:  ${ myDrone.fly().isFlying() === true }
  can land: ${ myDrone.land().isFlying() === false }
  battery capacity: ${ myDrone.capacity }
  battery status: ${ myDrone.draw(50).getCharge() }%
  battery drained: ${ myDrone.draw(75).getCharge() }%
`);
console.log(`
  constructor linked: ${ myDrone.constructor === createDrone }
`);

axios.get(`${window.location.href}/scripts.js`)
    .then(json => {
        debugView(json.data, 'Conteúdo do arquivo script.js');
    })
    .catch(err => {
        console.log('Deu ruim aqui', JSON.stringify(err.toString()))
        firstView({Erro: JSON.stringify(err.toString())})
    });
