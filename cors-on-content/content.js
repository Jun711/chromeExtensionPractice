console.log('content script running')

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message)
  if (message.fn == 'invokeCorsContent') {
    var xhr = new XMLHttpRequest();
    var apiEndpoint = 'https://a2futq1qbh.execute-api.us-east-1.amazonaws.com/Mock/incr-tts';

    xhr.open('GET', apiEndpoint);
    
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.responseType = 'json';

    xhr.onreadystatechange = function () {
      // if we get an error, go here
      if (this.readyState == XMLHttpRequest.DONE && this.status >= 400) {
        var res = xhr.response;
        console.log('invokeCorsContent err: ', res);
      }

      if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        console.log('invokeCorsContent suc: ', xhr.response);
      }
    }

    xhr.send();
  }
}