function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

  function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }
// Text-Processing API Url
const API_URL = 'http://ctp.byjusweb.com/api/otp';
const commentElement = document.getElementById('comment');
  // Getting comment text
  const commentText = commentElement.value;
const ul = document.getElementById('urls');

const options = {
    method: 'POST',
    body: JSON.stringify(details),
    headers: {
        'Content-Type': 'application/json'
    }
}


const details = {
    phoneNumber: commentText,
};

// Button click handler
const onAnalyzeButtonClick = () => {
  // Getting a textarea element with a comment
  

  // Handle empty comment
  if (!commentText) {
          return handleEmptyComment();
  }
  // Calling the API and passing the result with the displayResult as a callback function
  return analyzeComment();
};
const analyzeComment = () => {
  fetch(API_URL, options)
  .then((resp) => resp.json())
  .then(function(data) {
    let books = data.response.items;
    return books.map(function(book) {
      let li = createNode('li'),
          a = createNode('a');
      
      a.innerHTML = "Success";
      append(li, a);
      append(ul, li);
    })
  })
  .catch(function(error) {
    console.log(error);
  });   
}
