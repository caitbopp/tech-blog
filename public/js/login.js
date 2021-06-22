const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({"username": username, "password": password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ "username": username, "email": email, "password": password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  const showSignUp = (event) => {
    event.preventDefault();
    console.log('I was clicked!');
    document.querySelector('.create-new-login').classList.remove('hidden')
    document.querySelector('.login-card').classList.add('hidden')
};

const showLogin = (event) => {
  event.preventDefault();
  console.log('I was clicked!');
  document.querySelector('.create-new-login').classList.add('hidden')
  document.querySelector('.login-card').classList.remove('hidden')
};


  document
    .querySelector('#sign-up-btn')
    .addEventListener('click', showSignUp);

  document
    .querySelector('#login-btn')
    .addEventListener('click', showLogin);
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  