import { styled, Box, Typography } from "@mui/material";
import { temaPadrao } from "../temas/temaPadrao";
export const CardBox = styled(Box)(() => ({
    padding: "40px 20px",
    borderRadius: "35px",
    backgroundImage: temaPadrao.gradiente.padrao,
    textAlign: "center",
    margin: "10px"
}));
export const iconeCard = {
    height: "45px",
    width: "45px",
    marginBottom: "10px"
};
export const Titulo = styled(Typography)(() => ({
    fontFamily: "neometric-bold",
    fontSize: "27px",
    marginBottom: "8px",
}));
export const Texto = styled(Typography)(() => ({
    maxWidth: "280px",
    fontFamily: "neometric-light",
    color: "#FADEC9",
}));