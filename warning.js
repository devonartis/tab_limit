document.addEventListener('DOMContentLoaded', () => {
  const currentLimit = document.getElementById('currentLimit');
  chrome.storage.sync.get('maxTabs', (data) => {
    currentLimit.textContent = data.maxTabs;
  });
});