import { FunctionComponent } from "react";
import NextImage from 'next/image'
import sgv from '../../../public/devs.svg'
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

interface IProps {

}

const Component: FunctionComponent<IProps> = ({ }) => {

    const [title, setTitle] = useState<string[]>([])

    const delay = (ms: number) => new Promise((resolve) => setInterval(resolve, ms))
    useEffect(() => {
        (async () => {
            const arr = ('Bem vindo ao meu portifolio').split("")
            let time = 50

            for(let c=0;c <= arr.length;c++){
                await delay(time)
                await setTitle(arr.slice(0,c))
                time = time -1
            }
        })()
    }, [])

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
                        {title.length > 0 ? title.reduce((v,a) => v+a) : ''}
                    </h1>
                </div>
            </header>
        </>
    )
}

export default Component