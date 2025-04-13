import { Box, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from "../hooks/useCart";
import { useNavigate, useParams } from "react-router-dom";
import { getTotal } from "../utils/getTotal";
import { useUser } from "../hooks/useUser";
import { useEffect } from "react";
export const Cart = () => {
    const { getUserCart, changeQuantity, removeFromCart } = useCart()
    const { userId } = useParams()
    const cart = getUserCart(userId!)
    const { isLogin } = useUser()
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin) navigate("/auth/login")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        cart &&
        <Box mb={3}>
            <Typography variant="h4" textAlign={"center"} color="var(--primary)" mb={3}>
                Your Cart ( {cart.products.length > 1 ? `${cart.products.length} items` : `${cart.products.length} item`} )
            </Typography>
            {
                cart.products.length > 0 ?
                    <Box>
                        <TableContainer component={Paper} sx={{ minWidth: 350, maxWidth: "80%", margin: "auto" }} >
                            <Table aria-label="simple table" >
                                <TableHead>
                                    <TableRow style={{ fontWeight: "600" }}>
                                        <TableCell align="center">Item</TableCell>
                                        <TableCell align="center">Price</TableCell>
                                        <TableCell align="center">Quantity</TableCell>
                                        <TableCell align="center">Total</TableCell>
                                        <TableCell align="center">Delete</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        cart.products.map(product =>
                                            <TableRow
                                                key={product.product.id}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    <Stack direction={"row"} alignItems={"center"} gap={1}>
                                                        <Box width={"70px"}>
                                                            <img src={product.product.main_img} alt={product.product.name} />
                                                        </Box>
                                                        <span style={{ fontSize: "17px", fontWeight: "600", display: "block", maxWidth: "200px" }}>
                                                            {product.product.name}
                                                        </span>
                                                    </Stack>
                                                </TableCell>
                                                <TableCell align="center">${product.product.price}</TableCell>
                                                <TableCell >
                                                    <Stack direction={"row"} gap={1} minWidth={"150px"} justifyContent={"center"}>
                                                        <AddIcon className="pointer" onClick={() => changeQuantity("+", product.product.id, cart.userId)} /> <span style={{ fontSize: "17px" }}>{product.quantity}</span> <RemoveIcon className="pointer" onClick={() => changeQuantity("-", product.product.id, cart.userId)} />
                                                    </Stack>
                                                </TableCell>
                                                <TableCell align="center" className="price-label">${(product.product.price * product.quantity).toFixed(2)}</TableCell>
                                                <TableCell align="center" ><DeleteIcon color="error" className="pointer" onClick={() => removeFromCart(product.product.id, cart.userId)} /></TableCell>
                                            </TableRow>
                                        )
                                    }
                                </TableBody>
                                <TableFooter sx={{ borderTop: "1px solid grey" }}>
                                    <TableRow style={{ fontSize: "18px" }}>
                                        <TableCell className="price-label" colSpan={3}>Total Price</TableCell>
                                        <TableCell align="center" className="price-label">${getTotal(cart)}</TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </Box> : <p style={{
                        fontSize: "18px",
                        textAlign: "center"
                    }}>No Products in your Cart.</p>
            }
        </Box >
    );
};