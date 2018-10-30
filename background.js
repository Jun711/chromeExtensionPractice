console.log('background running');

function buttonClicked(tab) {
    let msg = {
        txt: 'setBackgroundColor'
    }
    chrome.tabs.sendMessage(tab.id, msg)
}

chrome.browserAction.onClicked.addListener(buttonClicked)