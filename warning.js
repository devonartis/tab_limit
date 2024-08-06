/*
document.addEventListener('DOMContentLoaded', () => {
  const currentLimit = document.getElementById('currentLimit');
  chrome.storage.sync.get('maxTabs', (data) => {
    currentLimit.textContent = data.maxTabs;
  });
});
Old code
*/

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('closeButton').addEventListener('click', function() {
      chrome.runtime.sendMessage({action: "closeWarning"});
  });

  // Fetch and display the current tab limit
  chrome.storage.sync.get('maxTabs', function(data) {
      document.getElementById('currentLimit').textContent = data.maxTabs;
  });
});