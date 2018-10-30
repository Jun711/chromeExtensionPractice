console.log('chrome ext running')

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if (message.txt === 'setBackgroundColor') {
    let paragraphs = document.getElementsByTagName('p');
    for (elt of paragraphs) {
      elt.style['background-color'] = '#42f48f';
    }
  }
}
