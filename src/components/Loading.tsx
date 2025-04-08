import { Box, CircularProgress } from "@mui/material";
type LoadingProps = {
    height?: string
}
const Loading = ({ height }: LoadingProps) => {
    return (
        <Box sx={{ display: 'flex', height: height ? height : "250px", justifyContent: "center", alignItems: "center" }}>
            <CircularProgress style={{ color: "var(--primary)" }} />
        </Box>
    );
}

export default Loading
