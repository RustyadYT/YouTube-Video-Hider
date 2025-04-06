chrome.storage.sync.get(["blockedKeywords"], (result) => {
    const defaultKeywords = ["gorilla tag", "#gorillatag"];
    const blockedKeywords = result.blockedKeywords ? Array.from(new Set(result.blockedKeywords.concat(defaultKeywords))) : defaultKeywords;
  
    function hideVideos() {
      const videoSelectors = [
        "ytd-video-renderer",
        "ytd-grid-video-renderer",
        "ytd-reel-item-renderer",
        "ytd-compact-video-renderer",
        "ytd-rich-item-renderer",
        "ytd-rich-grid-media",
        "ytd-rich-shelf-renderer"
      ];
  
      const combinedSelector = videoSelectors.join(", ");
      const videoElements = document.querySelectorAll(combinedSelector);
  
      videoElements.forEach((videoElement) => {
        const textContent = videoElement.textContent.toLowerCase();
        blockedKeywords.forEach((keyword) => {
          if (textContent.includes(keyword.toLowerCase())) {
            videoElement.style.display = "none";
          }
        });
      });
    }
  
    function hideShorts() {
      const shortsSection = document.querySelectorAll("ytd-reel-shelf-renderer, ytd-rich-shelf-renderer");
      shortsSection.forEach((shortSection) => {
        const textContent = shortSection.textContent.toLowerCase();
        blockedKeywords.forEach((keyword) => {
          if (textContent.includes(keyword.toLowerCase())) {
            shortSection.style.display = "none";
          }
        });
      });
    }
  
    function hideAll() {
      hideVideos();
      hideShorts();
    }
  
    const observer = new MutationObserver(hideAll);
    observer.observe(document.body, { childList: true, subtree: true });
  
    hideAll(); // Initial call to hide videos and shorts on page load
  });