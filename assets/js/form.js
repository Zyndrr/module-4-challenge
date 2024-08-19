// TODO: Create a variable that selects the form element
const form = document.querySelector('form');
// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.
function handleFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formObject = Object.fromEntries(formData);
  if (formObject.username && formObject.title && formObject.content) {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.push(formObject);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    redirectPage('blog.html');
  } else {
    const errorElement = document.querySelector('#error');
    errorElement.textContent = 'Please complete the form';
  }
}
// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
form.addEventListener('submit', handleFormSubmit);