import { Azamat, Kevin, Nicole, Oladimeji, Pamela } from "../assets/images/images";
import SlideObj from "../types";

export const palette = {
    bg_primary: "#262424",
    bg_sand: "#59453a",
    bg_leaves: "#38412c",
    bg_pink: "#b09396",
    bg_brown: "#744a4a",
    orange: "#ebab58"

}

export const TOTAL_PROGRESS_CURSOR = 100

export const slidesArray: SlideObj[] = [
    {
      big_image_url: Oladimeji,
      custom_title: "Everyday Flowers",
      bg_sx: palette.bg_primary,
      bg_dx: palette.bg_sand,
      img_dx: Pamela,
      img_sx: Nicole,
      dx_text: {
        writer: "Luca Viperti \n for vogue magazine",
        date: "July 2019",
        link: "HAVE A LOOK"
      },
      stepper_color: palette.bg_sand,
    },
    {
      big_image_url: Pamela,
      custom_title: "The \n Wilder night",
      bg_dx: palette.bg_leaves,
      bg_sx: palette.bg_primary,
      img_dx: Kevin,
      img_sx: Oladimeji,
      dx_text: {
        writer: "Carol Smith \n for Elle decor",
        date: "January 2019",
        link: "HAVE A LOOK"
      },
      stepper_color: palette.bg_leaves,
    },
    {
      big_image_url: Kevin,
      custom_title: "Smooth \n  Memories",
      bg_dx: palette.bg_sand,
      bg_sx: palette.bg_primary,
      img_dx: Azamat,
      img_sx: Pamela,
      dx_text: {
        writer: "Andrea Schiavone \n for Harpers Bazar",
        date: "November 2019",
        link: "HAVE A LOOK"
      },
      stepper_color: palette.bg_sand
    },
    {
      big_image_url: Azamat,
      custom_title: "Future \n  Inverse",
      bg_dx: palette.bg_pink,
      bg_sx: palette.bg_primary,
      img_dx: Nicole,
      img_sx: Kevin,
      dx_text: {
        writer: "Maria Grazie Cirri \n for vogue UK magazine",
        date: "October 2018",
        link: "HAVE A LOOK"
      },
      stepper_color: palette.bg_pink
    },
    {
      big_image_url: Nicole,
      custom_title: "Born \n Urban",
      bg_dx: palette.bg_brown,
      bg_sx: palette.bg_primary,
      img_dx: Oladimeji,
      img_sx: Azamat,
      dx_text: {
        writer: "Giorgia Mentana \n for Grazia magazine",
        date: "July 2018",
        link: "HAVE A LOOK"
      },
      stepper_color: palette.bg_brown
    },
  ];


