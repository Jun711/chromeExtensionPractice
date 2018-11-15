function onContentButPressed(evt) {
  console.log('onContentButPressed evt: ', evt);
  let params = {
    active: true,
    currentWindow: true
  }

  chrome.tabs.query(params, function(tabs) {
    let message = {
      fn: 'invokeCorsContent'
    }
    chrome.tabs.sendMessage(tabs[0].id, message);
  }); 
}

function onBackgroundButPressed(evt) {
  console.log('onBackgroundButPressed evt: ', evt);

  let message = {
    fn: 'invokeCorsBackground'
  }
  chrome.runtime.sendMessage(message);
}

function init() {
  let contentBut = document.getElementById('contentBut');
  let backgroundBut = document.getElementById('backgroundBut');

  contentBut.addEventListener('click', onContentButPressed)
  backgroundBut.addEventListener('click', onBackgroundButPressed)
}

init()