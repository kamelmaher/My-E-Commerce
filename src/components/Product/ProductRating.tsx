import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { Box } from '@mui/material';
type ProductRatingProps = {
    rating: number
}
const ProductRating = ({ rating }: ProductRatingProps) => {
    return (
        <Box fontSize={"8px"}>
            {
                Array.from({ length: 5 }, (_, index) => (
                    <p style={{ color: "var(--primary)", display: "inline-block" }}>
                        {
                            index > rating - 1 ? <StarBorderIcon key={index} /> : <StarIcon key={index} />
                        }
                    </p>
                ))
            }
        </Box>
    )
}

export default ProductRating
