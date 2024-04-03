import Image from "next/image"
import styles from "./footer.module.css"
export default function Footer(){
    return (
        <header header className={styles.rodapé}>
            <Image width={170} height={50} src={'https://ead.ifms.edu.br/theme/moove/pix/moodle-logo-white.png'}/>
        </header>
    )
}