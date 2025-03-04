document.addEventListener("DOMContentLoaded", () => {
    updateWatchTime();
    updateOpenCount();

    chrome.storage.onChanged.addListener((changes) => {
        if (changes.watchTime) {
            document.getElementById("watchTime").textContent = formatTime(changes.watchTime.newValue || 0);
        }
    });

    setInterval(updateWatchTime, 1000);
    setInterval(updateOpenCount, 5000);
});

function updateWatchTime() {
    chrome.storage.local.get(["watchTime"], (data) => {
        document.getElementById("watchTime").textContent = formatTime(data.watchTime || 0);
    });
}

function updateOpenCount() {
    chrome.storage.local.get(["openCount"], (data) => {
        document.getElementById("openCount").textContent = data.openCount || 0;
    });
}

function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}
