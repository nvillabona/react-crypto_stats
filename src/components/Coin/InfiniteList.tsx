import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
//Components
import { Box, CircularProgress, Card, Grid, Skeleton } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';
//Utils
import { formatNum } from '../../utils';


interface Props {
    data: {
        coinIsLoading: boolean
        coinData: any
    },
    updatePage: React.Dispatch<React.SetStateAction<number>>,
    page: number
}

const InfiniteList = (props: Props) => {
    const { data, updatePage, page } = props;
    const [coins, setcoins] = useState(data.coinData.data ?? []);
    useEffect(() => {
        setcoins(data.coinData.data ?? []);
    }, [data])

    const fetchMoreData = () => {
        updatePage(page + 1)
    };

    const itemCardStyles = {
        m: 0.1,
        cursor: 'pointer',
    }
    return (
        <Box sx={{ mt: 3 }}>
            {/* header */}
            <Card sx={{ m: 0.1, mb: 1, background: '#9dc9f5' }}>
                <Grid container sx={{ p: 2 }} spacing={1}>
                    <Grid item xs={2} md={3} textAlign={'center'}><b>Symbol</b></Grid>
                    <Grid item xs={4} md={3} textAlign={'center'}><b>Name</b></Grid>
                    <Grid item xs={3} md={3} textAlign={'center'}><b>Price</b></Grid>
                    <Grid item xs={2} md={3} textAlign={'center'}><b>24h Change</b></Grid>
                </Grid>
            </Card>
            {
                !data.coinIsLoading && coins.length > 0 ?
                    <InfiniteScroll
                        dataLength={coins.length}
                        next={() => fetchMoreData()}
                        hasMore={page <= Math.ceil(data.coinData.info.coins_num / 100)}
                        loader={<LoadingComponent />}
                    >
                        {
                            coins.map((coin: any, index: number) => {
                                return (
                                    <Link to={`/currency/${coin.id}`} key={index}>
                                        <Card
                                            sx={{ ...itemCardStyles, background: index % 2 === 0 ? '#eff2f5' : 'white' }}
                                        >
                                            <Grid container sx={{ p: 2 }} spacing={1}>
                                                <Grid item xs={2} md={3} textAlign={'center'}>{coin.symbol}</Grid>
                                                <Grid item xs={4} md={3} textAlign={'center'}>{coin.name}</Grid>
                                                <Grid item xs={3} md={3} textAlign={'center'}>{formatNum(coin.price_usd)}</Grid>
                                                <Grid item xs={2} md={3} textAlign={'center'}>
                                                    {coin.percent_change_24h > 0 ?
                                                        <span style={{ color: '#19c785' }}>{`📈 ${coin.percent_change_24h}`}</span>
                                                        : <span style={{ color: '#ec525a' }}>{`📉 ${coin.percent_change_24h}`}</span>}
                                                </Grid>
                                            </Grid>
                                        </Card>
                                    </Link>
                                )
                            })
                        }
                    </InfiniteScroll>
                    :
                    <Card sx={{p:2}}>
                        <Skeleton height={100} animation="wave" />
                        <Skeleton height={100} animation="wave" />
                        <Skeleton height={100} animation="wave" />
                        <Skeleton height={100} animation="wave" />
                    </Card>

            }
        </Box>
    )
}

const LoadingComponent = () => {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}   >
            <CircularProgress color='primary' sx={{ m: 1 }} />
            <h3>Loading...</h3>
        </Box>
    )
}

export default InfiniteList;
