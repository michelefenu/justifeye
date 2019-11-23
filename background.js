// background.js
let toggle = false;

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
    toggle = !toggle;

    // Send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];

        if (toggle) {
            chrome.tabs.sendMessage(activeTab.id, { "message": "activate_justifeye" });
            chrome.browserAction.setIcon({ path: "icons8-eye-checked-100.png", tabId: tab.id });
        } else {
            chrome.tabs.sendMessage(activeTab.id, { "message": "disable_justifeye" });
            chrome.browserAction.setIcon({ path: "icons8-eye-unchecked-100.png", tabId: tab.id });
        }
    });
});

chrome.webNavigation.onCompleted.addListener(function (tab) {
    // Send a message to the active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        if (toggle) {
            chrome.tabs.sendMessage(activeTab.id, { "message": "activate_justifeye" });
            chrome.browserAction.setIcon({ path: "icons8-eye-checked-100.png", tabId: tab.id });
        } else {
            // chrome.tabs.sendMessage(activeTab.id, { "message": "disable_justifeye" });
            chrome.browserAction.setIcon({ path: "icons8-eye-unchecked-100.png", tabId: tab.id });
        }
    });
});
