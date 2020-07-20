import React, { useState } from 'react';
import { MDBBtn } from 'mdbreact';


const Greeting = () => {
    const [message, setMessage] = useState("") /* getter는 안만드는 ㅇ이ㅠ??? */
    const [color, setColor] = useState("")
    const onClickRed = () => setColor("red")
    const onClickGreen = () => setColor("green")
    const onClickBlue = () => setColor("blue")
    const onClickWelcome = () => setMessage("야옹~!")
    const onClickBye = () => setMessage("멍멍")

    return (
        <> //FRAGMENT
            <MDBBtn onClick={onClickWelcome}>입장</MDBBtn>
            <MDBBtn onClick={onClickBye}>퇴장</MDBBtn>
            <h1 style={{color}}>{message}</h1>
            <MDBBtn onClick={onClickRed} color={"danger"}>적색 변환</MDBBtn>
            <MDBBtn onClick={onClickGreen} color={"success"}>녹색 변환</MDBBtn>
            <MDBBtn onClick={onClickBlue} color={"primary"}>청색 변환</MDBBtn>
        </>
    );
};

export default Greeting;