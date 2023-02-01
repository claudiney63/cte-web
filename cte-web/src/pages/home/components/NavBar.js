import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const navItems = ['Turmas', 'Sobre Nós', 'Colaboradores', 'Alunos']

export default function NavBar() {
    return (
        <>
            <AppBar position="static" style={{ background: '#EBEBEB' }}>
                <Toolbar>
                    <IconButton>
                        <img height={40} width={30} src='https://preview.redd.it/mui-goku-full-artwork-v0-khujdqbdv4291.png?auto=webp&s=e03a5b4572502f5e6247f652cdcd80b3a5d29aaa'>
                        </img>
                    </IconButton>
                    <Typography style={{ color: '#2686A5', fontWeight: 'bold' }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Colégio CTE
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#494949', mr: 4 }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <Button style={{ background: '#2686A5', color: 'white' }}>Entrar</Button>
                </Toolbar>
            </AppBar>
            <Container sx={{ width: '95%' }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <p style={{color: '#494949'}}>Contatos</p>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <img src='homeImage.png'/>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}