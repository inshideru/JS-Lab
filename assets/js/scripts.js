'use strict';

function build (cb) {
  /** DOM ELEMENTS */
  const mainDiv = document.getElementById(elementId);

  const msgBody = document.createElement('div');
  const preData = document.createElement('pre');
  const codeEl = document.createElement('code');
  mainDiv.appendChild(msgBody);
  mainDiv.appendChild(preData);
  preData.appendChild(codeEl);

  return cb();
}

function setJSONView (elementId) {

  /** JSON DATA */
  const jsonObject = {
    nome: 'Paulo',
    sobrenome: 'Sorrentino'
  };

  /** DOM ELEMENTS */
  const mainDiv = document.getElementById(elementId);

  const msgBody = document.createElement('div');
  const preData = document.createElement('pre');
  const codeEl = document.createElement('code');
  mainDiv.appendChild(msgBody);
  mainDiv.appendChild(preData);
  preData.appendChild(codeEl);

  return function (object) {
    /** PRINTING JSON */
    codeEl.innerHTML = JSON.stringify(object || jsonObject, null, 4);
    hljs.highlightBlock(codeEl);
  };
}

function setCodeView (elementId) {

  /** DOM ELEMENTS */
  const mainDiv = document.getElementById(elementId);

  const msgBody = document.createElement('div');
  const preData = document.createElement('pre');
  const codeEl = document.createElement('code');
  codeEl.classList.add('JavaScript');

  mainDiv.appendChild(msgBody);
  mainDiv.appendChild(preData);
  preData.appendChild(codeEl);

  return function (codeString) {
    codeEl.innerHTML = codeString;
    hljs.highlightBlock(codeEl);
  };
}
