console.log('chrome ext running')

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message)
  if (message.purpose == 'setBackgroundColor') {
    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
      elt.style['background-color'] = '#42f48f';
    }
  } 
  else if (message.purpose === 'changePValue') {
    let headers = document.getElementsByTagName('p');
    for (elt of headers) {
      elt.style['background-color'] = '#42f48f';
      elt.innerHTML = message.newHeader;
    }
  }
}
