# Netflix-GPT Project

## setup

### Create React App

1. I'm building Netflix-GPT using react and tailwindcss
2. First, i had basic structure for our app using
   cmd **npx create-react-app netflix-gpt**

### Tailwindcss

**1. npm i -D tailwindcss <br> 2. npx tailwindcss init**

### Features to build in Netflix-GPT

1. Login or signup page(If you are not loggedIn) <br>
   1. signIn / signUp form
   2. redirect to browse page
2. Browse Page(you will go to browse page after authentication) <br>
   a. Header <br>
   b. Main Movie Container<br>
   1. Movie Trailer in background
   2. Title and description
   3. Movie suggestions <br> Movies category <br> Movies list which is scrolling left to right or vice versa
3. NetflixGPT <br>
   1. Search Bar
   2. Movie suggestion according to the searcg bar.

## Process

1. Create-react-app
2. Configured Tailwindcss
3. Created Sign In Component
4. Created Sign Up Component
5. Rouiting of App
6. Form Validation
7. useRef hook
8. Firebase setup
9. Deploying our app to firbase server
10. Authenticated signIn and signUp form with firebase, now any one can create their account on this app and login to use it
11. Setup the user store in redux
12. onAuthStateChange --> Write this code in useEffect hook because we only need to run once
13. Always unsubscribe onAuthStateChange when component is unmounted. onAuthStateChange return a unsubscribe function - return ()=> unsubscribe() -- if want to clean code in useEffect then use return like this.
14. Always add hardcoded value to constant files.

## Things I have learned

1. If you want to validate a big form then use Formik library.
2. At the time of validation how we can get the value of inputs, either we can use state variables or use useRef hook:
   ````js
   const email = useRef(null);
   <input ref="{email}" type="text" /> ```\
   ````
3. It gives you reference of that input box as an object
4. Firebase setup <br>
   1. Goto firebase webiste https://firebase.google.com
   2. Click on get started
   3. Create a new project
   4. After project is created then click on continue and then click on web
   5. then install firebase SDK in our app.
   6. We have to enable authentication from firebase.
   7. To deploy to firebase use the below cmd: first intall firebase cli - npm i-g firebase-tools
      1. firebase login
      2. firebase init
      3. firebase deploy
5. As soon as user logged in or user sign up we should store the user data in our redux store so that we can use this data in anywhere in our program.
6. If you want to show something after user get logged in then we use the current user object for ex: {user && <p>Hello, Welcome back</p>}

resume from 15.Let build the core - 32:00
