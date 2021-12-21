import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Paid, GitHub } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Link to="/" style={{ color: '#f7931a' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <Paid />
                        </IconButton>
                    </Link>
                    <Link to="/" style={{ color: '#ffffff' }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Crypto data
                        </Typography>
                    </Link>

                </Toolbar>
            </AppBar>
            <div className='floatingButton'>
                <a href="https://github.com/nvillabona/react-crypto_stats" 
                target="_blank" 
                rel="noopener noreferrer">
                    <Fab color="primary" aria-label="add">
                        <GitHub />
                    </Fab>
                </a>
            </div>
        </Box>
    );
}