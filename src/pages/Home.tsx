import Navbar from "../components/Navbar";
import { Typography, SvgIcon } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import perfil from "../images/garota.png";
import { textoHome, ImgPerfil, iconeFlecha } from "./HomeStyles";
const Icone = () => (
  <>
    <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1} gradientTransform="rotate(300)">
        <stop offset={0} stopColor="rgba(237,163,86,1)" />
        <stop offset={1} stopColor="rgba(234,103,94,1)" />
      </linearGradient>
    </svg>
    <EastIcon sx={ iconeFlecha } />
  </>
)
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>Michael<br/> User Interface<br/> Designer</Typography>
        <Typography variant="subtitle1" sx={ textoHome }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</Typography>
        <Typography variant="caption">Let's Talk <SvgIcon component={Icone}/></Typography>
        <ImgPerfil src={perfil} />
      </main>
    </>
  );
}
export default Home;
