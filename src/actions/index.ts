

export const getCoinData = (page: number) => {
    const apiUrl: string = page === 100 ? 'https://api.coinlore.net/api/tickers/' : `https://api.coinlore.net/api/tickers/?start=${page}&limit=100`;

    return (dispatch: Function) => {
        if (page === 100) {
            dispatch({ type: 'COIN_GET_COIN_DATA' });
        }
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: 'COIN_GET_COIN_DATA_SUCCESS',
                    payload: data
                })
            })
            .catch(error => {
                dispatch({
                    type: 'COIN_GET_COIN_DATA_FAILURE',
                    payload: error
                })
            }
            )
    }
}

export const getGlobalData = () => {
    return (dispatch: Function) => {
        dispatch({ type: 'COIN_GET_GLOBAL_DATA' });
        fetch('https://api.coinlore.net/api/global/')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: 'COIN_GET_GLOBAL_DATA_SUCCESS',
                    payload: data[0]
                })
            })
            .catch(error => {
                dispatch({
                    type: 'COIN_GET_GLOBAL_DATA_FAIL',
                    payload: error
                })
            }
            )
    }
}

