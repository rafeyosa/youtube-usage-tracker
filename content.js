let totalTime = 0;
let interval;

const updateTime = () => {
    chrome.storage.local.get(["watchTime"], (result) => {
        let currentWatchTime = result.watchTime || 0;
        totalTime = currentWatchTime + 1;

        chrome.storage.local.set({ watchTime: totalTime }, () => {
            if (chrome.runtime.lastError) {
                console.error("Error saving watch time:", chrome.runtime.lastError);
            }
        });
    });
};

const observer = new MutationObserver(() => {
    const video = document.querySelector("video");
    if (video) {
        video.onplay = () => {
            if (!interval) {
                interval = setInterval(updateTime, 1000);
            }
        };
        video.onpause = () => {
            clearInterval(interval);
            interval = null;
        };
        video.onended = () => {
            clearInterval(interval);
            interval = null;
        };
    }
});

observer.observe(document, { childList: true, subtree: true });
