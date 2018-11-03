console.log('before setup')
function setup() {
  console.log('setup')
  let userinput = document.getElementById('userinput');
  console.log(userinput)
  function changeText(event) {
    console.log('changeText event: ', event)
    console.log(userinput.value)
    let params = {
      active: true,
      currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
      console.log('tab: ', tabs)
      // send a message to the content script
      console.log('event: ', event)
      let message = 'abc';
      let msg = {
        purpose: "changePValue",
        newHeader: userinput.value
      }
      chrome.tabs.sendMessage(tabs[0].id, msg);
    }
  }

  userinput.addEventListener('change', changeText)
  userinput.oninput = function(event) {
    changeText(event)
  }
}

setup()
