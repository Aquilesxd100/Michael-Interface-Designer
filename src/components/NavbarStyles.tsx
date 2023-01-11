import { styled, Button } from "@mui/material";
import { temaPadrao } from "../temas/temaPadrao";
export const BotaoContato = styled(Button)(() => ({
    textTransform: "none",
    backgroundImage: temaPadrao.gradiente.padrao,
    borderRadius: "21px",
    padding: "7px 17px",
    fontSize: "17px"
}));
export const Header = styled('header')(() => ({
    margin: "0 0 7vh 0",
    paddingTop: "14px"
}))
export const imgAvatar = {
    backgroundImage: temaPadrao.gradiente.padrao
};