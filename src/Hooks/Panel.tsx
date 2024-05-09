import { ReactNode, useContext } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"

type PanelProps = {
    title: string
    children: ReactNode
}

const Panel = ({title, children}: PanelProps) => {
    const theme = useContext(ThemeContext);
    const className = 'panel-' + theme;
    return(
        <section className={className}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

export default Panel