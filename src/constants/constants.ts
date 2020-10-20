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
      big_image_url: `${process.env.PUBLIC_URL}/oladimeji.jpg`,
      custom_title: "Everyday Flowers",
      bg_sx: palette.bg_primary,
      bg_dx: palette.bg_sand,
      img_dx: `${process.env.PUBLIC_URL}/pamela.jpg`,
      img_sx: `${process.env.PUBLIC_URL}/nicole.jpg`,
      dx_text: {
        writer: "Luca Viperti \n for vogue magazine",
        date: "July 2019",
        link: "HAVE A LOOK"
      },
      stepper_color: palette.bg_sand,
    },
    {
      big_image_url: `${process.env.PUBLIC_URL}/pamela.jpg`,
      custom_title: "The \n Wilder night",
      bg_dx: palette.bg_leaves,
      bg_sx: palette.bg_primary,
      img_dx: `${process.env.PUBLIC_URL}/kevin.jpg`,
      img_sx: `${process.env.PUBLIC_URL}/oladimeji.jpg`,
      dx_text: {
        writer: "Carol Smith \n for Elle decor",
        date: "January 2019",
        link: "HAVE A LOOK"
      },
      stepper_color: palette.bg_leaves,
    },
    {
      big_image_url: `${process.env.PUBLIC_URL}/kevin.jpg`,
      custom_title: "Smooth \n  Memories",
      bg_dx: palette.bg_sand,
      bg_sx: palette.bg_primary,
      img_dx: `${process.env.PUBLIC_URL}/azamat.jpg`,
      img_sx: `${process.env.PUBLIC_URL}/pamela.jpg`,
      dx_text: {
        writer: "Andrea Schiavone \n for Harpers Bazar",
        date: "November 2019",
        link: "HAVE A LOOK"
      },
      stepper_color: palette.bg_sand
    },
    {
      big_image_url: `${process.env.PUBLIC_URL}/azamat.jpg`,
      custom_title: "Future \n  Inverse",
      bg_dx: palette.bg_pink,
      bg_sx: palette.bg_primary,
      img_dx: `${process.env.PUBLIC_URL}/nicole.jpg`,
      img_sx: `${process.env.PUBLIC_URL}/kevin.jpg`,
      dx_text: {
        writer: "Maria Grazie Cirri \n for vogue UK magazine",
        date: "October 2018",
        link: "HAVE A LOOK"
      },
      stepper_color: palette.bg_pink
    },
    {
      big_image_url: `${process.env.PUBLIC_URL}/nicole.jpg`,
      custom_title: "Born \n Urban",
      bg_dx: palette.bg_brown,
      bg_sx: palette.bg_primary,
      img_dx: `${process.env.PUBLIC_URL}/oladimeji.jpg`,
      img_sx: `${process.env.PUBLIC_URL}/azamat.jpg`,
      dx_text: {
        writer: "Giorgia Mentana \n for Grazia magazine",
        date: "July 2018",
        link: "HAVE A LOOK"
      },
      stepper_color: palette.bg_brown
    },
  ];


