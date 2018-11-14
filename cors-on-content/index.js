function init() {
  let button = document.getElementById('but');
  console.log(button)

  function onPressed(evt) {
    console.log('onPressed evt: ', evt);
    let params = {
      active: true,
      currentWindow: true
    }
  
    chrome.tabs.query(params, gotTabs);
  
    function gotTabs(tabs) {
      let message = {
        fn: 'invokeCors'
      }
      chrome.tabs.sendMessage(tabs[0].id, message);
    }    
  }
  button.addEventListener('click', onPressed)
}

init()