import { FunctionComponent, useEffect, useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


interface IProps {

}

const Component: FunctionComponent<IProps> = ({ }) => {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', e => {
            e.isTrusted && setIsOpen(false)
        })
    }, [])

    return (
        <>
            <input type="button" id="menu-top-check-button" style={{ display: "none" }} onClick={e => setIsOpen(!isOpen)} />
            <label htmlFor="menu-top-check-button" id="menu-top-check-button-label">
                {
                    isOpen ? <AiOutlineClose color="#fff" /> : <AiOutlineMenu color={'#fff' || 'var(--color3)'} />
                }
            </label>
            <nav id="menu-top" className={`${isOpen ? 'open' : 'close'}`}>
                <ul>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">GitHub</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Component