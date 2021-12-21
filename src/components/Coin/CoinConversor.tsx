import React, { useEffect, useState } from 'react'
//Components
import { Box, TextField, Button } from '@mui/material';
//Utils
import { formatNum } from '../../utils'
interface Props {
    coin: any
}

const CoinConversor = (props: Props) => {
    const { coin } = props
    const [amount, setAmount] = useState(0)
    const [result, setresult] = useState(0)
    const [type, setType] = useState('USD')

    const handleType = () => {
        if (type === 'USD') {
            setType('COIN')
        } else {
            setType('USD')
        }
    }

    useEffect(() => {
        if (type === 'USD') {
            setresult(amount * coin.price_usd)
        } else {
            setresult(amount / coin.price_usd)
        }
    }, [coin, amount])

    return (
        <Box display="flex" justifyContent="center" alignItems='center' flexDirection='column'>
            <Button variant='contained'
                onClick={() => handleType()}
                sx={{mb: 2, mt: 2}}
            >
                {`${type === 'USD' ? `${coin.symbol} to USD` : `USD to ${coin.symbol}`}`}
            </Button>
            <TextField 
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                onChange={(e) => setAmount(e.target.value === "" ? 0 : parseInt(e.target.value))} />
            <h2>
                {`${type === 'USD' ?
                    formatNum(parseInt(result.toFixed(20)))
                    :
                    result.toFixed(5)} ${type === 'USD' ? 'USD' : coin.symbol}`}
            </h2>
        </Box>
    )
}

export default CoinConversor
