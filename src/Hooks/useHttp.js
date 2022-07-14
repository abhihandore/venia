import { useCallback, useReducer } from "react";

const httpReducer = (state, action) => {
	switch (action.type) {
		case "sending":
			return { ...state, isLoading: true };
		case "success":
			return { ...state, isLoading: false, data: action.data };
		case "failed":
			return {
				isLoading: false,
				data: null,
				error: {
					isError: true,
					errMessage: action.errMessage,
				},
			};
		default:
			return { ...state };
	}
};
const useHttp = (requestedFunc) => {
	const initialHttpState = {
		isLoading: null,
		data: [],
		error: { isError: null, errMessage: "" },
	};

	const [httpReq, dispatchHttpReq] = useReducer(httpReducer, initialHttpState);

	const sendRequest = useCallback(
		async (requestedData) => {
			dispatchHttpReq({
				type: "sending",
			});
			const data = await requestedFunc(requestedData);
			try {
				dispatchHttpReq({
					type: "success",
					data,
				});
			} catch (err) {
				dispatchHttpReq({
					type: "failed",
					errMessage: err.message ?? "Something went Wrong",
				});
			}
		},
		[dispatchHttpReq, requestedFunc]
	);

	return {
		sendRequest,
		...httpReq,
	};
};

export default useHttp;
