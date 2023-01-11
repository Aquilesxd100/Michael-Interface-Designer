import { Avatar, Typography, Grid } from "@mui/material";
import { BotaoContato, imgAvatar } from "./NavbarStyles";
function Navbar() {
    return(
        <header>
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
                    <BotaoContato variant="contained">Contact</BotaoContato>
                </Grid>
            </Grid>
        </header>
    );
}
export default Navbar;