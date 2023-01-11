import { styled } from "@mui/material";
export const textoHome = {
    maxWidth: "43%",
    margin: "7px 0"
};
export const iconeFlecha = {
    fill: "url(#linearColors)",
    marginLeft: "15px",
    position: "relative",
    top: "5px"
};
export const ImgPerfil = styled('img')(()=>({
    position: "absolute",
    top: "20vh",
    width: "35%",
    right: "14.8%",
    zIndex: "-1",
    borderRadius: "50% 50% / 35% 35% 35% 35%"
}));