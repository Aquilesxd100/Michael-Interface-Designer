import { Avatar, Typography, Grid } from "@mui/material";
import { imgAvatar } from "./NavbarStyles";
import { Botao } from "../styles/estilos";
import { Header } from "./NavbarStyles";
function Navbar() {
    return(
        <Header>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={2} container>
                    <Avatar sx={ imgAvatar }>M</Avatar>
                    <Typography variant="h6" sx={{ margin: "5px" }}>Michael</Typography>
                </Grid>
                <Grid item xs={6} container>
                    <Typography variant="h6">Home</Typography>
                    <Typography variant="h6">About</Typography>
                    <Typography variant="h6">Services</Typography>
                    <Typography variant="h6">Portfolio</Typography>
                </Grid>
                <Grid item xs={2} container columnSpacing={-6}>
                    <Botao variant="contained">Contact</Botao>
                </Grid>
            </Grid>
        </Header>
    );
}
export default Navbar;