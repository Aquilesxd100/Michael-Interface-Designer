import { Grid } from "@mui/material"
import { SubTitulo } from "../styles/estilos";
import { iconeCard } from "../components/CardStyles";
import Card from "../components/Card"
import BrushIcon from '@mui/icons-material/Brush';
function Services() {
    return(
        <Grid container alignItems="center">
            <Grid item xs={12}>
                <SubTitulo sx={{textAlign: "center"}}>My Best Services</SubTitulo>
            </Grid>
            <Grid item xs={12} container>
                <Card icone={<BrushIcon sx={ iconeCard }/>} titulo="Web Design" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." /> 
                <Card icone={<BrushIcon sx={ iconeCard }/>} titulo="Web Development" texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis." /> 
            </Grid>
        </Grid>
    );
}
export default Services;