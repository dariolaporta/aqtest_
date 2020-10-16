import { Azamat, Kevin, Nicole, Oladimeji, Pamela } from "../assets/images/images";
import SlideObj from "../types";

export const palette = {
    bg_primary: "#262424",
    bg_sand: "#59453a",
    bg_leaves: "#38412c",
    bg_pink: "#b09396",
    bg_brown: "#744a4a"

}


export const slidesArray: SlideObj[] = [
    {
      big_image_url: Oladimeji,
      custom_title: "Everyday Flowers",
      bg_sx: palette.bg_primary,
      bg_dx: palette.bg_sand,
      img_dx: Pamela,
      img_sx: Nicole,
    },
    {
      big_image_url: Pamela,
      custom_title: "Wilder night",
      bg_dx: palette.bg_leaves,
      bg_sx: palette.bg_primary,
      img_dx: Kevin,
      img_sx: Oladimeji,
    },
    {
      big_image_url: Kevin,
      custom_title: "Smooth Memories",
      bg_dx: palette.bg_sand,
      bg_sx: palette.bg_primary,
      img_dx: Azamat,
      img_sx: Kevin,
    },
    {
      big_image_url: Azamat,
      custom_title: "Future Inverse",
      bg_dx: palette.bg_pink,
      bg_sx: palette.bg_primary,
      img_dx: Nicole,
      img_sx: Kevin,
    },
    {
      big_image_url: Nicole,
      custom_title: "Born Urban",
      bg_dx: palette.bg_brown,
      bg_sx: palette.bg_primary,
      img_dx: Oladimeji,
      img_sx: Azamat,
    },
  ];


