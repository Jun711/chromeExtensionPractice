console.log('background running');

chrome.runtime.onMessage.addListener(receiver);

let word = "";

function receiver(request, sender, sendResponse) {
    console.log(request);
    word = request.text;
}