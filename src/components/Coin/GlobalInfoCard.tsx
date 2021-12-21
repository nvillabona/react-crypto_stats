import React from 'react';
//Components
import { Card, Container, Skeleton, Grid } from '@mui/material';
//Utils
import {formatNum} from '../../utils';

interface Props {
    data: {
        globalIsLoading: boolean
        globalData: any
    }
}

const GlobalInfoCard: React.FC<Props> = (props: Props) => {
    const { data } = props;
    return (
        <Card sx={{ mt: 2, pb: 1 }}>
            <Container maxWidth="sm">
                <h2>Global Info</h2>
                {
                    data.globalIsLoading && data.globalData ?
                        <>
                            <LoadingComponent />
                        </>
                        :
                        <Grid container spacing={1}>
                            <Grid item xs={8} md={6}>
                                <p><b>Coins count: </b>{`${formatNum(data.globalData.coins_count)}`}</p>
                                <p><b>Active markets:</b>{` ${formatNum(data.globalData.active_markets)}`}</p>
                                <p><b>Total market cap:</b>{` ${formatNum(parseInt(data.globalData.total_mcap))}`}</p>
                            </Grid>
                            <Grid item xs={8} md={6}>
                                <p><b>Bitcoin dominance:</b>{` ${data.globalData.btc_d}%`}</p>
                                <p><b>Ethereum dominance:</b>{` ${data.globalData.eth_d}%`}</p>
                                <p>
                                    <b>Market cap change:</b>
                                    {
                                        ` ${data.globalData.mcap_change > 0 ?
                                            `📈 ${data.globalData.mcap_change}`
                                            : `📉 ${data.globalData.mcap_change}`}%`
                                    }
                                </p>
                            </Grid>
                        </Grid>
                }
            </Container>
        </Card>
    )
}

const LoadingComponent = () => {
    return (
        <Grid container spacing={2}>
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
    )
}


export default GlobalInfoCard;