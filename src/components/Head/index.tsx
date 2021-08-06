import { FunctionComponent } from "react"
import Head from 'next/head'
import { memo } from "react"

interface IProps {
    title?: string
    iconSrc?: string
    description?: string
    charset?: string
    lang?: string
    children?: undefined
}

const Component: FunctionComponent<IProps> = ({ title, iconSrc, description, charset, lang }) => {
    return (
        <>
            <Head>
                <title>{title || ''}</title>
                <link rel="icon" href={iconSrc || "/favicon.ico"} />

                <meta charSet={charset || "utf-8"} />
                <meta httpEquiv="Content-Language" content={lang || "en"} />
                {description ? (
                    <>
                        <meta name="description" content={description} />
                        <meta property="og:description" content={description} />

                    </>) : ''}
            </Head>
        </>
    )
}

export default memo(Component)