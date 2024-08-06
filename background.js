chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ maxTabs: 5 }, () => {
      console.log("Default max tabs set to 5");
    });
  });
  
  let isShowingWarning = false;
  
  chrome.tabs.onCreated.addListener((tab) => {
    if (isShowingWarning) {
      return;
    }
  
    chrome.tabs.query({}, (tabs) => {
      chrome.storage.sync.get('maxTabs', (data) => {
        if (tabs.length > data.maxTabs) {
          chrome.tabs.remove(tab.id);
          
          isShowingWarning = true;
          
          chrome.windows.getCurrent((currentWindow) => {
            chrome.windows.create({
              url: 'warning.html',
              type: 'popup',
              width: 300,
              height: 200,
              left: Math.round((currentWindow.width - 300) / 2 + currentWindow.left),
              top: Math.round((currentWindow.height - 200) / 2 + currentWindow.top)
            }, (popup) => {
              chrome.windows.onRemoved.addListener(function listener(windowId) {
                if (windowId === popup.id) {
                  isShowingWarning = false;
                  chrome.windows.onRemoved.removeListener(listener);
                }
              });
            });
          });
        }
      });
    });
  });
  
  // Add this message listener
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "closeWarning") {
      chrome.windows.remove(sender.tab.windowId);
    }
  });