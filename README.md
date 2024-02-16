# Netflix-GPT Project

## setup

### Create React App

1. I'm building Netflix-GPT using react and tailwindcss
2. First, i had basic structure for our app using
   cmd **npx create-react-app netflix-gpt**

### Tailwindcss

**1. npm i -D tailwindcss <br> 2. npx tailwindcss init**

### Features to build in Netflix-GPT

- Login or signup page(If you are not loggedIn) <br>
  1.  signIn / signUp form
  2.  redirect to browse page
- Browse Page(you will go to browse page after authentication) <br>
  a. Header <br>
  b. Main Movie Container<br>
  1.  Movie Trailer in background
  2.  Title and description
  3.  Movie suggestions <br> Movies category <br> Movies list which is scrolling left to right or vice versa
- NetflixGPT <br>
  1.  Search Bar
  2.  Movie suggestion according to the searcg bar.

## Process

- Create-react-app
- Configured Tailwindcss
- Created Sign In Component
- Created Sign Up Component
- Rouiting of App
- Form Validation
- useRef hook
- Firebase setup
- Deploying our app to firbase server
- Authenticated signIn and signUp form with firebase, now any one can create their account on this app and login to use it
- Setup the user store in redux
- onAuthStateChange --> Write this code in useEffect hook because we only need to run once
- Always unsubscribe onAuthStateChange when component is unmounted. onAuthStateChange return a unsubscribe function - return ()=> unsubscribe() -- if want to clean code in useEffect then use return like this.
- Always add hardcoded value to constant files.
- Whenever your app is in React.strictMode then lots of code run twice in our app. It is happening becuase in strcitmode react render again to check that every thing is consistent or not. It is only run twice in development mode. It will not run twice in production.
- In React Strict Mode, certain functions, including render methods and effects (including useEffect), are intentionally invoked twice. This is done for the purpose of detecting and highlighting side effects in your code during development. React Strict Mode is a development-only feature and does not affect the production build of your application.
- Registered on TMDB website and create app and got the api key auth and acccess token
- Get data from TMDB (Now playing) api.
- Plan to structure the browse page
- Created Slice for moviesVideo and movies
- updated the store with slice
- embeded the youtube video and maked it autuplay
- created movies list and movies card
- make app responsive in mobile devices
- created separate file for custom hooks
- showing movies category dynamically
- added feature in signUp form - send email verification
- clean up the code by adding return in useEffect code
- added loader
- If you want to call useEffect only once on create-react-app then we have to tell linter that disable linter and enable linter

  ```js
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    // Your code here
  }, []);
  /* eslint-enable react-hooks/exhaustive-deps */
  ```

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

<!-- TMDB(The Movie DataBase) -->

1. Goto the TMDB website -- https://www.themoviedb.org/
2. Goto Edit profile after loggedIn in TMDB website
3. Then goto API on the left side

<!-- Tailwind SCroll bar hide -->

plugins: [
require('tailwind-scrollbar-hide'),
],
and then use scrollbar-hide in classname to use it

resume from 2:37:00
