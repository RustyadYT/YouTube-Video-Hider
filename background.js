chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ blockedKeywords: ["Gorilla Tag"] }, () => {
      console.log("Blocked keywords set to Gorilla Tag");
    });
  });