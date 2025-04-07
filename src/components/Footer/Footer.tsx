import { Stack } from "@mui/material"
import FooterLogo from "./FooterLogo"
import FooterLinks from "./FooterLinks"
import Bottom from "./Bottom"
const links1 = ["Laptops & Computers", "Smart Phones & Tablets", "TV & Audio", "Appliances", "Jewelry & Watches"]
const Footer = () => {
    return (
        <Stack
            direction={"row"}
            flexWrap={"wrap"}

            bgcolor={"#121416"}
            color={"#b1b1b1"}
        >
            <FooterLogo />
            <FooterLinks title="Find It Fast" links={links1} />
            <FooterLinks title="Quick Links" links={links1} />
            <FooterLinks title="Service us" links={links1} />
            <Bottom />
        </Stack>
    )
}

export default Footer
