import { Avatar, Typography, Grid, Button } from "@mui/material";
import { temaPadrao } from "../temas/temaPadrao";
function Navbar() {
    return(
        <header>
            <Grid container alignItems="center" justifyContent="space-between">
                <Grid item xs={2} container>
                    <Avatar sx={{ backgroundImage: temaPadrao.gradiente.padrao }}>M</Avatar>
                    <Typography variant="h6" sx={{ margin: "5px" }}>Michael</Typography>
                </Grid>
                <Grid item xs={6} container>
                    <Typography variant="h6" sx={{ margin: "0 12px" }}>Home</Typography>
                    <Typography variant="h6" sx={{ margin: "0 12px" }}>About</Typography>
                    <Typography variant="h6" sx={{ margin: "0 12px" }}>Services</Typography>
                    <Typography variant="h6" sx={{ margin: "0 12px" }}>Portfolio</Typography>
                </Grid>
                <Grid item xs={2} container columnSpacing={-6}>
                    <Button variant="contained" sx={{ textTransform: "none", backgroundImage: temaPadrao.gradiente.padrao, borderRadius: "21px", padding: "7px 17px", fontSize: "17px"}}>Contact</Button>
                </Grid>
            </Grid>
        </header>
    );
}
export default Navbar;