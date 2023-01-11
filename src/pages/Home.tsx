import Navbar from "../components/Navbar";
import { Typography, SvgIcon, Button } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import perfil from "../images/garota.png";
const Icone = () => (
  <>
    <svg width={0} height={0}>
      <linearGradient id="linearColors" x1={1} y1={0} x2={1} y2={1} gradientTransform="rotate(300)">
        <stop offset={0} stopColor="rgba(237,163,86,1)" />
        <stop offset={1} stopColor="rgba(234,103,94,1)" />
      </linearGradient>
    </svg>
    <EastIcon sx={{ fill: "url(#linearColors)", marginLeft: "15px", position: "relative", top: "5px" }} />
  </>
)
function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>Michael<br/> User Interface<br/> Designer</Typography>
        <Typography variant="subtitle1" sx={{ maxWidth: "43%", margin: "7px 0" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan.</Typography>
        <Typography variant="caption">Let's Talk <SvgIcon component={Icone}/></Typography>
        <img src={perfil} style={{ position: "absolute", top: "20vh", width: "35%", right: "14.8%", zIndex: "-1", borderRadius: "50% 50% / 35% 35% 35% 35%" }} />
      </main>
    </>
  );
}
export default Home;
