const notificationReducer = (state = { message: null }, action) => {
	switch (action.type) {
		case "SET":
			return action.payload;
		case "RESET":
			return { message: null };
		default:
			return state;
	}
};

export const resetNotification = () => {
	return {
		type: "RESET",
	};
};

export const setNotification = (message, type) => {
	return {
		type: "SET",
		payload: { message, type },
	};
};

export default notificationReducer;
