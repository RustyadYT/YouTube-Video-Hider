document.addEventListener('DOMContentLoaded', function () {
    const keywordsList = document.getElementById('keywordsList');
    const addKeywordButton = document.getElementById('addKeywordButton');
    const keywordInput = document.getElementById('keywordInput');
    const exportKeywordsButton = document.getElementById('exportKeywordsButton');
    const importKeywordsButton = document.getElementById('importKeywordsButton');
    const importKeywordsInput = document.getElementById('importKeywordsInput');
    const clearKeywordsButton = document.getElementById('clearKeywordsButton');
    const themeSwitch = document.getElementById('themeSwitch');
  
    const defaultKeywords = ["gorilla tag", "#gorillatag"];
  
    function displayKeywords(keywords) {
      keywordsList.innerHTML = '';
      keywords.forEach(keyword => {
        const listItem = document.createElement('li');
        listItem.textContent = keyword;
        keywordsList.appendChild(listItem);
      });
    }
  
    chrome.storage.sync.get(["blockedKeywords", "isDarkMode"], (result) => {
      const blockedKeywords = result.blockedKeywords ? Array.from(new Set(result.blockedKeywords.concat(defaultKeywords))) : defaultKeywords;
      displayKeywords(blockedKeywords);
  
      if (result.isDarkMode !== false) {
        document.body.classList.add('dark');
        themeSwitch.checked = true;
      }
    });
  
    addKeywordButton.addEventListener('click', () => {
      const newKeyword = keywordInput.value.trim();
      if (newKeyword) {
        chrome.storage.sync.get(["blockedKeywords"], (result) => {
          const blockedKeywords = result.blockedKeywords || [];
          blockedKeywords.push(newKeyword);
          chrome.storage.sync.set({ blockedKeywords: blockedKeywords }, () => {
            displayKeywords(Array.from(new Set(blockedKeywords.concat(defaultKeywords))));
            keywordInput.value = '';
          });
        });
      }
    });
  
    exportKeywordsButton.addEventListener('click', () => {
      chrome.storage.sync.get(["blockedKeywords"], (result) => {
        const keywords = result.blockedKeywords || [];
        const blob = new Blob([JSON.stringify(keywords)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'keywords.json';
        a.click();
        URL.revokeObjectURL(url);
      });
    });
  
    importKeywordsButton.addEventListener('click', () => {
      importKeywordsInput.click();
    });
  
    importKeywordsInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const importedKeywords = JSON.parse(e.target.result);
          chrome.storage.sync.get(["blockedKeywords"], (result) => {
            const blockedKeywords = result.blockedKeywords || [];
            const newKeywords = Array.from(new Set(blockedKeywords.concat(importedKeywords)));
            chrome.storage.sync.set({ blockedKeywords: newKeywords }, () => {
              displayKeywords(Array.from(new Set(newKeywords.concat(defaultKeywords))));
            });
          });
        };
        reader.readAsText(file);
      }
    });
  
    clearKeywordsButton.addEventListener('click', () => {
      chrome.storage.sync.set({ blockedKeywords: [] }, () => {
        displayKeywords(defaultKeywords);
      });
    });
  
    themeSwitch.addEventListener('change', () => {
      if (themeSwitch.checked) {
        document.body.classList.add('dark');
        chrome.storage.sync.set({ isDarkMode: true });
      } else {
        document.body.classList.remove('dark');
        chrome.storage.sync.set({ isDarkMode: false });
      }
    });
  });