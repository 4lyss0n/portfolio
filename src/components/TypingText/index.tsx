import { useEffect, useState, FunctionComponent} from "react";


interface IProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    children: Array<string | JSX.Element>
    typeDelay?: number
    addInDelayOnStep?: number
}

const Component: FunctionComponent<IProps> = ({ children, typeDelay = 10, addInDelayOnStep = 0, ...props }) => {


    const delay = (ms: number) => new Promise(resolve => setInterval(resolve, ms))

    const TextArray: Array<string | JSX.Element> = []
    children.forEach(item => {
        if (typeof (item) == 'string') {
            TextArray.push(...item.split(''))
            return
        }
        TextArray.push(item)
    })
    const [textArrayState, setTextArrayState] = useState<Array<string | JSX.Element>>([])
    const [text, setText] = useState<Array<string | JSX.Element>>([])

    useEffect(() => {
        (async () => {
            for (let c = 0; c <= TextArray.length; c++) {
                await delay(typeDelay)
                setTextArrayState(TextArray.slice(0, c))
                typeDelay = typeDelay + addInDelayOnStep
            }
        })()
    }, [])


    useEffect(() => {

        const resultArray: Array<string | JSX.Element> = []

        textArrayState.forEach(item => {
            if (typeof (item) == 'string') {
                if (
                    typeof (resultArray[resultArray.length > 0 ? resultArray.length - 1 : 0]) != 'string'
                ) {
                    resultArray.push(item)
                    return
                }
                resultArray[resultArray.length - 1] = resultArray[resultArray.length - 1] + item
                return
            }
            resultArray.push(item)
        })

        setText(resultArray)

    }, [textArrayState])

    return (
        <span {...props}>
            {text}
        </span>
    )
}


export default Component