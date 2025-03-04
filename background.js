let youtubeOpenCount = 0;
let isYouTubeOpen = false;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url && tab.url.includes("youtube.com")) {
        if (!isYouTubeOpen) {
            isYouTubeOpen = true;
            chrome.storage.local.get(["openCount"], (data) => {
                youtubeOpenCount = (data.openCount || 0) + 1;
                chrome.storage.local.set({ openCount: youtubeOpenCount });
            });
        }
    }
});

chrome.tabs.onRemoved.addListener((tabId, removeInfo) => {
    chrome.tabs.query({ url: "*://www.youtube.com/*" }, (tabs) => {
        if (tabs.length === 0) {
            isYouTubeOpen = false;
        }
    });
});
