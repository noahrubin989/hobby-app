import SailingIcon from "@mui/icons-material/Sailing";
import IceSkatingIcon from "@mui/icons-material/IceSkating";
import KayakingIcon from "@mui/icons-material/Kayaking";
import KitesurfingIcon from "@mui/icons-material/Kitesurfing";
import ScubaDivingIcon from "@mui/icons-material/ScubaDiving";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const fs = 150;
const cardData = [
  {
    icon: <SailingIcon sx={{ fontSize: fs }} />,
    title: "Sailing",
    description:
      "Harness the power of the wind, explore the open water, and experience the thrill of controlling a vessel.",
  },
  {
    icon: <IceSkatingIcon sx={{ fontSize: fs }} />,
    title: "Ice Skating",
    description:
      "Combine grace and athleticism, gliding effortlessly on ice while performing elegant moves and challenging jumps.",
  },
  {
    icon: <KayakingIcon sx={{ fontSize: fs }} />,
    title: "Kayaking",
    description:
      "Connect with nature as you navigate rivers, lakes, and coastlines, enjoying a great workout.",
  },
  {
    icon: <KitesurfingIcon sx={{ fontSize: fs }} />,
    title: "Kite Surfing",
    description:
      "Blend the excitement of surfing with the exhilaration of flying a kite, riding waves, and performing impressive aerial maneuvers.",
  },
  {
    icon: <ScubaDivingIcon sx={{ fontSize: fs }} />,
    title: "Scuba Diving",
    description:
      " Discover a mesmerizing underwater world, encountering fascinating marine life, exploring vibrant coral reefs, and diving into thrilling adventures.",
  },
  {
    icon: <FitnessCenterIcon sx={{ fontSize: fs }} />,
    title: "Lifting Weights",
    description:
      "Improve strength, build muscle, boost fitness levels, and enhance overall physical performance for a healthier and more confident lifestyle.",
  },
];

export default cardData;
