import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createStore } from "redux";
import { Provider, provider } from "react-redux";
import notificationReducer from "./reducers/NotificationReducer";

const store = createStore(notificationReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
	</Provider>
);
