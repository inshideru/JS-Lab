'use strict';

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

function buildHighlightElement (elementId) {
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

function setJSONView (elementId) {
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

function setCodeView (elementId) {
  return function (codeString) {
    const codeEl = buildHighlightElement(elementId);
    codeEl.innerHTML = codeString;
    hljs.highlightBlock(codeEl);
  };
}
