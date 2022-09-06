// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import App from './lib/components/app';
// import { Provider } from 'react-redux';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { fetchUsers } from "./lib/api/usersApiSlice";
// import store from './store';

// store.dispatch(fetchUsers());

// ReactDOM.render(
//     <Provider store={store}>
//         <App />
//     </Provider>
//     ,
//     document.getElementById('root')
// );

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from "react-dom";
import App from './lib/components/app';

render(<App />, document.getElementById("root"));
