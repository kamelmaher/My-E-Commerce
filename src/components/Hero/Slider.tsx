import { SwiperSlide, Swiper } from "swiper/react"
import product1 from "/banner_home1.png"
import product2 from "/banner_home2.png"
import Slide from "./Slide"
import picture from "/banner_home3.png"
import { Box, Stack } from "@mui/material"
const Slider = () => {
    return (
        <Stack direction={"row"} gap={2}>
            <Box
                width={{
                    xs: "100%",
                    lg: "75%"
                }}>
                <Swiper
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <Slide img={product1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Slide img={product2} />
                    </SwiperSlide>
                </Swiper>
            </Box>
            <Box
                display={{
                    xs: "none",
                    lg: "block"
                }}
            >
                <img src={picture} alt="banner-product" />
            </Box>
        </Stack >
    )
}

export default Slider
