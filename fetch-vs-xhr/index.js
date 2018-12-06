function onXhrButPressed(evt) {
  console.log('onXhrButPressed evt: ', evt);

  let message = {
    fn: 'xhrInvokeCorsBackground'
  }
  chrome.runtime.sendMessage(message);
}

function onFetchButPressed(evt) {
  console.log('onFetchButPressed evt: ', evt);

  let message = {
    fn: 'fetchInvokeCorsBackground'
  }
  chrome.runtime.sendMessage(message);
}

function init() {
  let xhrBut = document.getElementById('xhrBut');
  let fetchBut = document.getElementById('fetchBut');

  xhrBut.addEventListener('click', onXhrButPressed)
  fetchBut.addEventListener('click', onFetchButPressed)
}

init()