import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {

    const { usuario, handleLogout } = useContext(AuthContext)

    let data = new Date().getFullYear()

    let footerComponent

    if (usuario.token !== "") {
        footerComponent = (
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">Blog Pessoal Generation | &copy; {data}</p>
                    <p className="text-lg">Acesse nossas Redes Sociais:</p>
                    <div className="flex">
                        <LinkedinLogo size={48} weight="bold" />
                        <InstagramLogo size={48} weight="bold" />
                        <FacebookLogo size={48} weight="bold" />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
        {footerComponent}
        </>
    )
}
export default Footer;