import { FunctionComponent } from "react";
import NextImage from 'next/image'
import sgv from '../../../public/devs.svg'
import { TypingText } from '../'

interface IProps {

}

const Component: FunctionComponent<IProps> = ({ }) => {
    return (
        <>
            <header id="header-main-page">
                <div id="header-image-container">

                    <div id="header-image">
                        <NextImage
                            src={sgv}
                            alt="dev image"
                            layout="responsive"
                        />
                    </div>
                </div>
                <div id="title-container">
                    <h1>
                        <TypingText typeDelay={80} addInDelayOnStep={-1}>{[
                            <span className="chrome-text-effect" key="header-tilte-b">B</span>,
                            "em ",
                            <span className="chrome-text-effect" key="header-tilte-v">V</span>,
                            "indo a meu ",
                            <span className="chrome-text-effect" key="header-tilte-p">P</span>,
                            "ortifolio"
                        ]}</TypingText>
                    </h1>
                </div>
            </header>
        </>
    )
}

export default Component


