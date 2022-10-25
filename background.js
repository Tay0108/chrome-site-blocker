const blockedSites = ["://www.onet.pl", "://www.wp.pl", "://www.sadeczanin.info", "://sadeczanin.info", "://linkedin.com", "://www.linkedin.com", "://reddit.com", "://www.reddit.com"];

function runPageThroughFilter(tab) {
	blockedSites.forEach(function (site) {
		if (tab.url.includes(site)) {
			denyPage(tab.id);
		}
	});
};

function denyPage(tabId) {
	chrome.tabs.remove(tabId);
	// chrome.tabs.discard(tabId);
};

chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
	runPageThroughFilter(tab);
});