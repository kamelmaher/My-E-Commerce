import { Box } from "@mui/material"

type FooterLinksProps = {
    title: string,
    links: string[]
}
const FooterLinks = ({ title, links }: FooterLinksProps) => {
    return (
        <Box
            width={{
                xs: "100%",
                md: "calc(100% / 2)",
                lg: "calc(100% / 4)"
            }}
            padding={3}
            textAlign={{
                xs: "center",
                md: "start"
            }}

        >
            <p style={{ marginBottom: "20px", color: "white", fontWeight: "600" }}>{title}</p>
            {
                links.map(link => <Box key={link} className={"link pointer"}>
                    <span></span>
                    <p>{link}</p>
                </Box>)
            }

        </Box>
    )
}

export default FooterLinks
