import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory();

// const unlisten = history.listen((location, action) => {
//   // location is an object like window.location
//   console.log(action, location.pathname, location.state);
//   window.scroll(0, 0);
// });

export default history;