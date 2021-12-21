interface IAction {
	type: string,
	payload?: any
};

interface ICoinState{
	globalData: object,
	globalIsLoading: boolean,
	coinData: {
		data?: Array<object>,
	},
	coinIsLoading: boolean
}

const InitialState: ICoinState = {
	globalData: {},
	globalIsLoading: false,
	coinData: {
		data: []
	},
	coinIsLoading: false,
}

const coinReducer = (state:ICoinState = InitialState, action: IAction) => {
	switch (action.type) {
		case 'COIN_GET_COIN_DATA':
			return {
				...state,
				coinIsLoading: true
			}
		case 'COIN_GET_COIN_DATA_SUCCESS':
			const data = state.coinData.data && state.coinData.data.length !== 0 ? {
				data: [...state.coinData.data, ...action.payload.data],
				info: action.payload.info
			}: action.payload;
			return {
				...state,
				coinData: data,
				coinIsLoading: false
			};
		case 'COIN_GET_GLOBAL_DATA':
			return {
				...state,
				globalIsLoading: true
			}
		case 'COIN_GET_GLOBAL_DATA_SUCCESS':
			return {
				...state,
				globalData: action.payload,
				globalIsLoading: false
			};
		default:
			return state;
	}
}

export default coinReducer;