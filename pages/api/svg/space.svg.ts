import { NextApiHandler } from "next"

type ResponseType = string

type randomNumberFunction = (max: number, min: number) => number


const randomNumber: randomNumberFunction = (max = 10, min = 0) => Math.floor(Math.random() * max - min) + min

const createRect = (x: number, y: number) => `<rect x="${x}" y="${y}" width="1" height="1" stroke="#fff" fill="#fff" stroke-width="1"/>`


const Api: NextApiHandler<ResponseType> = (req, res) => {

    const imageSize: number = !req.query.size ? 5000 : (() => {
        const size = typeof (req.query.size) === 'string' ? Number.parseInt(req.query.size) : 5000
        return size <= 5000 ? size : 5000
    })()

    const maxStars:number = !req.query.maxStars ? imageSize * .15  : (() => {
        const maxStars = typeof (req.query.maxStars) === 'string' ? Number.parseInt(req.query.maxStars) : 5000
        return maxStars <= imageSize ** 2 / 3 ? maxStars : imageSize ** 2 / 3
    })()


    res.setHeader('Content-Type', 'image/svg+xml');

    res.send(`<svg width="600" height="600" viewBox="0 0 ${imageSize} ${imageSize}" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="0" width="100%" height="100%" stroke="#000" fill="#000" stroke-width="1"/>
    ${Array.from({
        length: randomNumber(maxStars,maxStars * .2)
    },
        () => createRect(
            randomNumber(imageSize, 0),
            randomNumber(imageSize, 0)
        )).reduce((a, v) => a + v)
        }
    </svg>`)
}

export default Api