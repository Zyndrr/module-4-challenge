// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector('main');
const backButton = document.querySelector('#back');

// TODO: Create a function that builds an element and appends it to the DOM
const buildElement = function (element, text, className) {
  const newElement = document.createElement(element);
  newElement.textContent = text;
  newElement.className = className;
  main.appendChild(newElement);
};

// TODO: Create a function that handles the case where there are no blog posts to display
const noPosts = function () {
  buildElement('h2', 'No blog posts yet...', 'no-posts');
};

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
const renderBlogList = function () {
  const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  if (blogPosts.length) {
    blogPosts.forEach(function (post) {
      buildElement('h2', post.title, 'post-title');
      buildElement('p', post.content, 'post-content');
      buildElement('p', `By: ${post.username}`, 'post-author');
    });
  } else {
    noPosts();
  }
};

// TODO: Call the `renderBlogList` function
renderBlogList();

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function () {
  redirectPage('index.html');
})
