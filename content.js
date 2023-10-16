// // Listen for messages from the popup
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === "fetchOriginalTweet") {
//       const originalTweet = document.querySelector(".permalink-tweet-container .tweet-text").textContent;
//       sendResponse({ originalTweet });
//     }
//   });
  
//   // Add the original tweet to the reply box
//   chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.action === "populateReplyBox") {
//       const replyBox = document.querySelector("textarea.tweet-box");
//       replyBox.value = request.originalTweet;
//     }
//   });
  
// function fetchOriginalTweet() {
//   const replyField = document.querySelector('div[aria-label="Add a comment…"]');
//   if (replyField) {
//     const originalTweetText = document.querySelector(
//       ".css-901oao.r-111h2gw.r-18jsvk2.r-poiln3.r-1e3m2v4.r-6gpygo.r-1jvns25.r-1wtj0ep.r-1777fci.r-184en5c"
//     );
//     if (originalTweetText) {
//       const tweetText = originalTweetText.innerText;
//       replyField.innerText = tweetText;
//     }
//   }
// }

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.action === "fetchOriginalTweet") {
//     fetchOriginalTweet();
//   }
// });

// content.js

// chrome.runtime.onMessage.addListener(function (message, _sender, _sendResponse) {
//   if (message.action === 'addButton') {
//     // Find the tweet container element
//     const tweetContainer = document.querySelector('.tweet'); // You may need to adjust this selector

//     if (tweetContainer) {
//       // Create the button
//       const replyButton = document.createElement('button');
//       replyButton.textContent = 'fetch';
//       replyButton.classList.add('your-button-class'); // Add your CSS class for styling

//       // Add a click event listener to handle the  action
//       replyButton.addEventListener('click', function () {
        
//       });

//       // Append the button to the tweet container
//       tweetContainer.appendChild(replyButton);
//     }
//   }
// });

function fetchOriginalTweet() {
  const tweetTextElement = document.querySelector('div[data-testid="tweet"] div[lang]');
  
  if (tweetTextElement) {
    const originalTweetText = tweetTextElement.innerText;
    alert(originalTweetText);
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchOriginalTweet") {
    fetchOriginalTweet();
  }
});


