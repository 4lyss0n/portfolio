
import { FunctionComponent, useState } from "react"
import { BiHide, BiShow } from 'react-icons/bi'

interface IProps {

}

const LoginPage: FunctionComponent<IProps> = ({ }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordIsShow, setPasswordIsShow] = useState(false)



    return (
        <>
            <form action="#">
                <p>Email : <input type="email" onChange={e => setEmail(e.target.value)} value={email} /></p>



                <input type="button" onClick={e => {
                    e.preventDefault()
                    e.isTrusted && setPasswordIsShow(!passwordIsShow)
                }}
                    style={{ display: 'none' }}
                    id="show-password-button"
                />



                <p>Password :    <input type={passwordIsShow ? 'text' : 'password'}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                /> <label htmlFor="show-password-button">{
                    passwordIsShow ? <BiHide /> : <BiShow />
                }</label>
                </p>

            </form>
        </>
    )
}

export default LoginPage