import { Box, Stack } from "@mui/material"
import paymentMethods from "/payment_method.png"
const Bottom = () => {
    return (
        <Stack
            direction={{
                xs: "column",
                md: "row"
            }}
            p={2}
            bgcolor={"#1d1f22"}
            color={"white"}
            width={"100%"}
            justifyContent={{
                xs: "center",
                md: "space-between"
            }}
            alignItems={"center"}
        >
            <p><span style={{ color: "var(--primary)" }}>© Reda Store.</span> All Rights Reserved.</p>
            <Box>
                <img src={paymentMethods} alt="Payments Method" loading="lazy" />
            </Box>
        </Stack>
    )
}

export default Bottom
