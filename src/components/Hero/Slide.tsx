type SlideProps = {
    img: string
}
const Slide = ({ img }: SlideProps) => {
    return (
        <img src={img} alt="banner-product-img" loading="lazy" />
    )
}

export default Slide
