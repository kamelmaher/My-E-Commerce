import { Box, CircularProgress } from "@mui/material";
type LoadingProps = {
    height?: string
    color?: string
}
const Loading = ({ height, color }: LoadingProps) => {
    return (
        <Box sx={{ display: 'flex', height: height ? height : "250px", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress style={{ color: color ? color : "var(--primary)" }} />
        </Box>
    );
}

export default Loading
