// Text-Processing API Url
const API_URL = 'https://api.vk.com/method/docs.search?count=1&access_token=f02dc4441e373901b94cd09b9992449f04b6745380f0407c22ebcf1efafdb0c8d29ee8945f407d70cea78&v=5.110&q=';

// Button click handler
const onAnalyzeButtonClick = () => {
  // Getting a textarea element with a comment
  const commentElement = document.getElementById('comment');
  // Getting comment text
  const commentText = commentElement.value.trim();

  // Handle empty comment
  if (!commentText) {
          return handleEmptyComment();
  }
  // Calling the API and passing the result with the displayResult as a callback function
  return analyzeComment(commentText, displayResult);
};

const analyzeComment = (comment, callback) => {
  const Get_API_URL = API_URL + comment
  // GET request to server
  axios.get(API_URL)
          .then(response => {
            const data = response.data;
            // Calling a callback function with data from the server
            callback(data)
          })
          .catch(error => console.error(error))
};

const handleEmptyComment = () => {
  const resultBlockElement = document.getElementById('main-result-block');
  resultBlockElement.classList.add('invisible');
  return alert('Your comment is empty =(');
};

const displayResult = result => {
  // Remove invisible class for main-result-block
  const resultBlockElement = document.getElementById('main-result-block');
  resultBlockElement.classList.remove('invisible');

  // Setting the color of the result text depending on the response label
  const label = result.url;
  const resultElement = document.getElementById('result');
  resultElement.setAttribute('class', label);
  let resultText = label;

  // Setting the result text
  resultElement.textContent = resultText;
};
