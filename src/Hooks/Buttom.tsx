import { ReactNode, useContext } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"

type ButtomProps = {
    children: ReactNode
}

const Buttom = ({children}: ButtomProps) => {
    const theme: string = useContext(ThemeContext)
    const classname =  "button-" + theme
    return(
        <button className={classname}>{children}</button>
    )
}

export default Buttom