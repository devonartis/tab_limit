chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ maxTabs: 5 }, () => {
      console.log("Default max tabs set to 5");
    });
  });
  
  let isShowingWarning = false;
  
  chrome.tabs.onCreated.addListener((tab) => {
    if (isShowingWarning) {
      return; // Ignore tab creation if we're showing the warning
    }
  
    chrome.tabs.query({}, (tabs) => {
      chrome.storage.sync.get('maxTabs', (data) => {
        if (tabs.length > data.maxTabs) {
          chrome.tabs.remove(tab.id);
          
          isShowingWarning = true;
          chrome.windows.create({
            url: 'warning.html',
            type: 'popup',
            width: 300,
            height: 200
          }, (window) => {
            // Listen for the warning window to close
            chrome.windows.onRemoved.addListener(function listener(windowId) {
              if (windowId === window.id) {
                isShowingWarning = false;
                chrome.windows.onRemoved.removeListener(listener);
              }
            });
          });
        }
      });
    });
  });
  