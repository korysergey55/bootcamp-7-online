import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';

import App from "./components/App/App";
import "./styles/global.css";
import {store, persistedStore} from './redux/store'
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
