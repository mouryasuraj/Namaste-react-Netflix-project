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

## Things I have learned

1. If you want to validate a big form then use Formik library.
2. At the time of validation how we can get the value of inputs, either we can use state variables or use useRef hook:
   const email = useRef(null);
   ````html
   <input ref="{email}" type="text" /> ```\
   ````
3. It gives you reference of that input box as an object
