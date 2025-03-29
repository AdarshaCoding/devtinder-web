# devTinder-web : Adi0

- Created a vite+react Project (https://vite.dev/guide/) : npm create vite@latest devtinder-web --template react
- Remove all unwanted code and just keep "Hello World!" in App.js
- Initialize the git repository and commit the code onto local repository

  - git init
  - git branch -M main
  - git add .
  - git commit -m "Hello World!"

- Installed tailwindcss: https://tailwindcss.com/docs/installation/using-vite
- updated the vite.config.js file with tailwindCSS
- Tested by adding few classed in App.js - it's working

- Installed daisyUI: https://daisyui.com/docs/install/
- updated the index.css by adding the daisyUI plugin and default theme

- Created folder "components" inside src and added NavBar component
- Added the code of NavBar into it and imported in App.js

- Installed: react-router-dom to handling navigation b/w the pages (https://reactrouter.com/home)
  -npm i react-router-dom

## Components design for routing

- Created BrowserRouter => Routes => Route="/" > Body => children-routes
- Added "Outlet" component in Body to render the child components under the Navbar
  Body component (**_parent_**)==>
  **_child_**

  - NavBar
  - Route = "/" => Feed
  - Route = "/login" => Login
  - Route = "/connections" => Connections
  - Route = "/profile" => Profile

- Added footer component
- According to route, page will be updated

- Added a Card in Login Component
  - updated with email and password and button to submit
  - created two state variables (emailId and password) for login
    - Binded them with each input text fields
  - installed axios to make an API calls, we can use fetch as well
  - created handleLoginClick function to send a POST call to backend but we endeded up with CORS errors
  - Installed (npm i cors) on backend
    - Frontend: http://localhost:5173/login
    - Backend: http://localhost:4000
      - /login API
    - As we had different PORT numbers even though we are on localhost, browser blocks the cross origin calls but we don't have any issues in POSTMAN, this is completely a browser thing(pre-flight request will be made even before the actual request made to back)
    - CORS options should be added in the backend
      - white list the frontend host IP (origin)
      - add credentials = true
    - whenever making an API call (login) from frontend using axios add {withCredentials = true} else it won't set the JWT token into application -> cookies
- Redux: https://redux-toolkit.js.org/tutorials/quick-start

  - Install the below two packages
    npm install @reduxjs/toolkit react-redux
  - created/configured store - appStore inside store folder
  - Provided the store at app level in App.js: <Provider store={appStore}>
    - so that we can use the store in all the places of the application
  - Create slice , - userSlice
    - create the reducers
    - export reducer and actions
    - add the reducer to store
  - dispatch an action using useDipatch hook
    - dispatch(action_fuction which is created in slice) - which will update the slice of the store
  - Subscribe to the store by using useSelector hook to use the data of the store

  - Add redux dev tool and check the data
  - User name and profile photo updated once the user logged in
  - navigate to "Feed" page using "useNavigate" hook if user logged in successfully
