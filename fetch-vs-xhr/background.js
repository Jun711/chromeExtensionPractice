console.log('background script running')

chrome.runtime.onMessage.addListener(gotMessage);

function xhr() {
  let xhr = new XMLHttpRequest();
  let apiEndpoint = 'https://a2futq1qbh.execute-api.us-east-1.amazonaws.com/Mock/incr-tts';

  xhr.open('POST', apiEndpoint);
  
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.responseType = 'json';

  xhr.onreadystatechange = function () {
    // if we get an error, go here
    if (this.readyState == XMLHttpRequest.DONE && this.status >= 400) {
      let res = xhr.response;
      console.log('xhr invokeCorsBackground err: ', res);
    }

    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
      console.log('xhr invokeCorsBackground suc: ', xhr.response);
    }
  }

  xhr.send();
}

function fetchData() {
  let apiEndpoint = 'https://a2futq1qbh.execute-api.us-east-1.amazonaws.com/Mock/incr-tts';

  fetch(apiEndpoint, {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      cache: 'no-cache',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      referrer: 'client',
      referrerPolicy: 'origin',
    })
    .then(res => {
      if (res.ok) {
        console.log('fetch invokeCorsBackground res: ', res);
      }
      throw new Error('something went wrong')
    })
    .catch(err => {
      console.log('fetch invokeCorsBackground err: ', err);
    })
}

function gotMessage(message, sender, sendResponse) {
  console.log('message: ', message)
  if (message.fn == 'xhrInvokeCorsBackground') {
    xhr();
  } else if (message.fn == 'fetchInvokeCorsBackground') {
    fetchData();
  }
}