chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ maxTabs: 5 }, () => {
      console.log("Default max tabs set to 5");
    });
  });
  
  chrome.tabs.onCreated.addListener((tab) => {
    chrome.tabs.query({}, (tabs) => {
      chrome.storage.sync.get('maxTabs', (data) => {
        if (tabs.length > data.maxTabs) {
          chrome.tabs.remove(tab.id);
          chrome.windows.create({
            url: 'warning.html',
            type: 'popup',
            width: 300,
            height: 200
          });
        }
      });
    });
  });