import React, {useEffect, useState} from 'react';

const Signin = () => {
    const [userid, setUserid] = useState('')
    const [password, setPassword] = useState('')
    const onChangeName = (e) => { setUserid(e.target.value) }
    const onChangePassword = (e) => setPassword(e.target.value)

    useEffect(() => {
        alert('rendering complete')
        console.log({userid, password})
    })
    

    return (
        <>
            <div>
                <input type="text" value={userid} onChange={onChangeName}/>
                <input type="text" value={password} onChange={onChangePassword}/>
            </div>
            <div>
                <b> 아이디: </b> {userid} <br/>
                <b> 비밀번호: </b> {password} <br/>
            </div>
        </>
    )
}

export default Signin;