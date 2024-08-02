// popup.js
document.addEventListener('DOMContentLoaded', () => {
  const currentMax = document.getElementById('currentMax');
  const newMax = document.getElementById('newMax');
  const updateButton = document.getElementById('updateMax');

  chrome.storage.sync.get('maxTabs', (data) => {
    currentMax.textContent = data.maxTabs;
    newMax.value = data.maxTabs;
  });

  updateButton.addEventListener('click', () => {
    const maxTabs = Math.min(Math.max(parseInt(newMax.value), 5), 10);
    chrome.storage.sync.set({ maxTabs }, () => {
      currentMax.textContent = maxTabs;
      newMax.value = maxTabs;
    });
  });
});