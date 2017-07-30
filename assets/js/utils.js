'use strict';

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const wait = time => new Promise((resolve, reject) => setTimeout(
    resolve,
    time
  )
);

// Tiny, recursive autocurry
const curry = (f, arr = []) => 
  (...args) => 
    ( a => a.length === f.length ? f(...a) : curry(f, a))([...arr, ...args]);

const buildHighlightElement = (elementId) => {
  /** DOM ELEMENTS */
  const mainDiv = document.getElementById(elementId);

  const msgBody = document.createElement('div');
  const preData = document.createElement('pre');
  const codeEl = document.createElement('code');
  mainDiv.appendChild(msgBody);
  mainDiv.appendChild(preData);
  preData.appendChild(codeEl);

  return codeEl;
}

const setJSONView = (elementId) => {
  const jsonObject = {
    nome: 'Paulo',
    sobrenome: 'Sorrentino'
  };
  const codeEl = buildHighlightElement(elementId);

  return function (object) {
    codeEl.innerHTML = JSON.stringify(object || jsonObject, null, 2);
    hljs.highlightBlock(codeEl);
  };
}

const setCodeView = (elementId) => {
  return function (codeString) {
    const codeEl = buildHighlightElement(elementId);
    codeEl.innerHTML = codeString;
    hljs.highlightBlock(codeEl);
  };
}
