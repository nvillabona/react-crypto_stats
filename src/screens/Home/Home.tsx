//React Libraries
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
//Actions
import {getCoinData, getGlobalData} from '../../actions'
//Components
import { Container } from '@mui/material';
import GlobalInfoCard from '../../components/Coin/GlobalInfoCard'
import InfiniteList from '../../components/Coin/InfiniteList'


const Home = () => {

    const dispatch = useDispatch()
    const coins = useSelector((state:RootStateOrAny) => state.coin)
    const [page, setpage] = useState(1)

    useEffect(() => {
        if (coins.coinData.data.length === 0) {
            dispatch(getCoinData(page*100))
            dispatch(getGlobalData())
        }else{

            dispatch(getCoinData(page*100))
        }
    }, [page])
    return (
        <Container maxWidth="md">
            <GlobalInfoCard data={coins}/>
            <InfiniteList data={coins} page={page} updatePage={setpage}/>
        </Container>
    )
}

export default Home;
