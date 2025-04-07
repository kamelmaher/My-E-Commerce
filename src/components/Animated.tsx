import { motion } from "motion/react"
import { ReactNode } from "react"

type AnimatedProps = {
    children: ReactNode
}
const Animated = ({ children }: AnimatedProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{width: "100%" , height: "100%"}}
        >
            {children}
        </motion.div>
    )
}

export default Animated
