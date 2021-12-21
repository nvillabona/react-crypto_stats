import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, RootStateOrAny } from 'react-redux'
//Utils
import { formatNum } from '../../utils'
//Components
import { Card, Container, Skeleton, Grid } from '@mui/material';
import CoinConversor from '../../components/Coin/CoinConversor'


const CoinDetail = () => {
    //Hooks
    const { id } = useParams()
    const coins = useSelector((state: RootStateOrAny) => state.coin)
    //state
    const [selectedCoin, setSelectedCoin] = useState(id && coins.data ? coins.data.find((coin: any) => coin.id === parseInt(id)) : null)

    useEffect(() => {
        if (id) {
            let searchedCoin = coins.coinData.data.find((coin: any) => coin.id === parseInt(id))

            if (searchedCoin) {
                setSelectedCoin(searchedCoin)
            } else {
                fetch(`https://api.coinlore.net/api/ticker/?id=${id}`)
                    .then(response => response.json())
                    .then(data => {
                        setSelectedCoin(data[0])
                    })
            }
        }
    }, [id, coins]);

    return (
        <Container maxWidth="md">
            <Card sx={{ mt: 2, pb: 1 }}>
                <Container maxWidth="sm">
                    {
                        selectedCoin && selectedCoin.name ?
                            <>
                                <h3>{selectedCoin.name}</h3>
                                <Grid container spacing={1}>
                                    <Grid item xs={8} md={6}>
                                        <p><b>Symbol: </b>{selectedCoin.symbol}</p>
                                        <p><b>Price in USD: </b>{`$${formatNum(selectedCoin.price_usd)}`}</p>
                                        <p><b>Price in BTC: </b>{`${formatNum(selectedCoin.price_btc)} BTC`}</p>
                                    </Grid>
                                    <Grid item xs={8} md={6}>
                                        {/* <p>{`Bitcoin dominance: ${selectedCoin.globalData.btc_d}%`}</p>
                                        <p>{`Ethereum dominance: ${selectedCoin.globalData.eth_d}%`}</p> */}
                                        <p>
                                            <b>Change in 24h: </b>
                                            {
                                                `${selectedCoin.percent_change_24h > 0 ?
                                                    `📈 ${selectedCoin.percent_change_24h}%`
                                                    : `📉 ${selectedCoin.percent_change_24h}`}%`
                                            }
                                        </p>
                                        <p>
                                            <b>Change in 1h: </b>
                                            {
                                                ` ${selectedCoin.percent_change_1h > 0 ?
                                                    `📈 ${selectedCoin.percent_change_1h}%`
                                                    : `📉 ${selectedCoin.percent_change_1h}`}%`
                                            }
                                        </p>
                                        <p><b>Current supply: </b>{`${formatNum(selectedCoin.csupply)} ${selectedCoin.symbol}`}</p>
                                    </Grid>
                                </Grid>
                                <hr></hr>
                                <h3>Conversor</h3>
                                <CoinConversor coin={selectedCoin} />
                            </>
                            :
                            <LoadingComponent />

                    }
                </Container>
            </Card>
        </Container>
    )
}

const LoadingComponent = () => {
    return (
        <>
            <Grid container spacing={2} sx={{pt:1}}>
                <Grid item xs={8} md={6}>
                    <Skeleton height={40} animation="wave" />
                    <Skeleton height={40} animation="wave" />
                    <Skeleton height={40} animation="wave" />
                </Grid>
                <Grid item xs={8} md={6}>
                    <Skeleton height={40} animation="wave" />
                    <Skeleton height={40} animation="wave" />
                    <Skeleton height={40} animation="wave" />
                </Grid>
            </Grid>
            <Skeleton height={60} width={100} animation="wave" />
            <Container maxWidth="xs" sx={{mt:3}}>
            <Skeleton height={60} animation="wave" />
            <Skeleton height={60} animation="wave" />
            <Skeleton height={60} animation="wave" />
            <Skeleton height={60} animation="wave" />
            </Container>
        </>

    )
}

export default CoinDetail;

