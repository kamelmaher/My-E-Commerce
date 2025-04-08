import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperType } from 'swiper';
import Product from "./Product"
import { Navigation } from 'swiper/modules';
import MyButton from "../MyButton";
import ProductButton from "./ProductButton";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { Stack, Box } from "@mui/material";
import { useRef } from "react";
import Section from "../Section";
import { ProductType } from "../../types/Product";

type ProductsContainerProps = {
    title: string
    id: string
    products: ProductType[]
}
const ProductsContainer = ({ title, id, products }: ProductsContainerProps) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const handleNext = () => {
        swiperRef.current?.slideNext();
    };

    const handlePrev = () => {
        swiperRef.current?.slidePrev();
    };
    return (
        <Section>
            <Stack
                id={id}
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                borderBottom={"3px solid var(--primary)"}
                mb={2}
            >
                <Box>
                    <MyButton size="medium" text={title} leftIcon={<LabelImportantIcon />} isTitle />
                </Box>
                <Stack direction={"row"} gap={2}>
                    <ProductButton icon={<ChevronLeftIcon />} handleClick={handlePrev} />
                    <ProductButton icon={<ChevronRightIcon />} handleClick={handleNext} />
                </Stack>
            </Stack>
            <Swiper
                modules={[Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={20}
                slidesPerView={1}
                loop={products.length > 4}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {
                    products.map(product => <SwiperSlide key={product.id}>
                        <Product product={product} />
                    </SwiperSlide>)
                }
            </Swiper>
        </Section>
    )
}

export default ProductsContainer
