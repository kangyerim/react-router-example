import React, {useEffect, useState} from 'react';

const SigninTest: React.FC = () => {
    const [userid, setUserid] = useState('')
    const [password, setPassword] = useState('')
    const onChangeName = (e) => {
        setUserid(e.target.value)
    }
    const onChangePassword = (e) => setPassword(e.target.value)

    // useEffect 컴포넌트가 랜더링 될 때마다 특정 작업을 수행하도록 설정
    useEffect(() => {
        alert(`아이디 변화만 체크   :   ${userid}`)
    }, [userid])


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

export default SigninTest;