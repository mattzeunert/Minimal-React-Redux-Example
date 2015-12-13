# Minimal-React-Redux-Example

The code in app.jsx creates a Redux store which is then used to render a React component.

It's all in one file to keep it easy to read. The code doesn't use actions to modify the state in the store.

To run the app just download the repo and open index.html in your browser.

## Code walk-through

Read this blog post for a [walk-through of how the code inside app.jsx works](http://www.mattzeunert.com/2015/12/13/minimal-react-redux-example.html).

## To edit the example 

You can edit the app.js file directly, but the app.jsx file is compiled using Babel.

Run these commands to run Babel, then edit the app.jsx file:

- `npm install`
- `babel --watch app.jsx --out-file app.js`
