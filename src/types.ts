type SlideObj = {
    big_image_url: string;
    custom_title: string;
    img_sx: string;
    img_dx: string;
    bg_sx: string;
    bg_dx: string;
    dx_text: DxText;
    count?: string;
    stepper_color: string;
}

type DxText = {
    writer: string;
    date: string;
    link: string;
}

export default SlideObj