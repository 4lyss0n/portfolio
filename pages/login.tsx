
import { useState } from "react"
import { FunctionComponent } from "react"
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
                <p>Email : </p>

                <input type="button" onClick={e => {
                    e.preventDefault()
                    e.isTrusted && setPasswordIsShow(!passwordIsShow)
                }}
                    style={{ display: 'none' }}
                    id="show-password-button"
                />

                <p>Password : <label htmlFor="show-password-button">{
                    passwordIsShow ? <BiHide /> : <BiShow />

                }</label>
                </p>


                <input type="email" onChange={e => setEmail(e.target.value)} value={email} />
                <input type={passwordIsShow ? 'text' : 'password'}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                />

            </form>
        </>
    )
}

export default LoginPage