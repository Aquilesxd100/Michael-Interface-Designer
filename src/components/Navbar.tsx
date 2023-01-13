import { Link } from "react-router-dom";
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
                    <Link to="">
                        <Typography variant="h6">Home</Typography>
                    </Link>
                    <Link to="/About">
                        <Typography variant="h6">About</Typography>
                    </Link>
                    <Link to="/services">
                        <Typography variant="h6">Services</Typography>
                    </Link>
                    <Link to="/portfolio">
                        <Typography variant="h6">Portfolio</Typography>
                    </Link>
                </Grid>
                <Grid item xs={2} container columnSpacing={-6}>
                    <Botao variant="contained">Contact</Botao>
                </Grid>
            </Grid>
        </Header>
    );
}
export default Navbar;