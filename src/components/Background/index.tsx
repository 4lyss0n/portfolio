import { FunctionComponent, useEffect } from 'react'
import Styles from './styles.module.css'

interface IProps {

}

const Component: FunctionComponent<IProps> = ({ }) => {

    useEffect(() => {
        document.querySelectorAll("." + Styles.side)
            .forEach((e: any, i) => e.style.setProperty('--side', i.toString()))

    }, [])

    return (
        <>
            <div className={Styles.container}>
                <div className={Styles.cube}>
                    <div className={Styles.sides}>
                        <span className={Styles.side + " cube-side"}></span>
                        <span className={Styles.side + " cube-side"}></span>
                        <span className={Styles.side + " cube-side"}></span>
                        <span className={Styles.side + " cube-side"}></span>
                    </div>
                    <div className={Styles.top}></div>
                    <div className={Styles.bottom}></div>
                    <div className={Styles.shadow}></div>
                </div>

            </div>

        </>
    )
}


export default Component