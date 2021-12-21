import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PaidIcon from '@mui/icons-material/Paid';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{color: '#f7931a'}}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <PaidIcon />
                        </IconButton>
                    </Link>
                    <Link to="/" style={{color: '#ffffff'}}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Crypto data
                        </Typography>
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}