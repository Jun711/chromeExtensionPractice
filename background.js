console.log('background running');

function buttonClicked(tab) {
    let msg = {
        purpose: 'setBackgroundColor'
    }
    chrome.tabs.sendMessage(tab.id, msg)
}

chrome.browserAction.onClicked.addListener(buttonClicked)