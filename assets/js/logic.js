// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggleDarkMode = function () {
  const body = document.body
  // const circle = document.querySelector('.circle')

  if (document.body.classList.contains('dark')) {
    body.classList.add('light');
    // circle.classList.add('light');
    body.classList.remove('dark');
    // circle.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  } else {
    body.classList.remove('light');
    // circle.classList.remove('light');
    body.classList.add('dark');
    // circle.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  }
};
const darkModeButton = document.querySelector('#toggle');
if (darkModeButton) {
  darkModeButton.addEventListener('click', toggleDarkMode);
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

