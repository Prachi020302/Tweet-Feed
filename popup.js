// document.getElementById("fetchOriginalTweet").addEventListener("click", function () {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.scripting.executeScript({
//         target: { tabId: tabs[0].id },
//         function: fetchOriginalTweet
//       });
//     });
//   });
  
//   function fetchOriginalTweet() {
//     const originalTweet = document.querySelector(".permalink-tweet-container .tweet-text").textContent;
//     alert(originalTweet);
//   }
  

document.getElementById("fetchTweetButton").addEventListener("click", () => {
  chrome.scripting.executeScript({
    target: {tabId: chrome.tabs.getCurrent().id},
    function: fetchOriginalTweet
  });
});
