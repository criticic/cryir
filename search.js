// Text-Processing API Url
const API_URL = 'https://api.vk.com/method/docs.search?access_token=aa38a866def346043b87f00936a2a206625c4b876a7bcb1f889cc6e23b19da05a491ea70d27dd23d37e39&v=5.110&q=';

// Button click handler
const onAnalyzeButtonClick = () => {
  // Getting a textarea element with a comment
  const commentElement = document.getElementById('comment');
  // Getting comment text
  const commentText = commentElement.value;
const resultElement = document.getElementById('urls');

  // Handle empty comment
  if (!commentText) {
          return handleEmptyComment();
  }
  // Calling the API and passing the result with the displayResult as a callback function
  return analyzeComment(commentText,resultElement);
};
const analyzeComment = (comment, ul) => {
const final_URL = API_URL + comment
  fetch(final_URL)
  .then((resp) => resp.json())
  .then(function(data) {
    let books = data.response.items;
    return books.map(function(book) {
      let li = createNode('li'),
          a = createNode('a');
      
      a.innerHTML = `${author.name.first} ${author.name.last}`;
      append(li, a);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });   
}
