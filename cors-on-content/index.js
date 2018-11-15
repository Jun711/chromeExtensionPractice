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

function init() {
  let contentBut = document.getElementById('contentBut');
  
  contentBut.addEventListener('click', onContentButPressed)
}

init()