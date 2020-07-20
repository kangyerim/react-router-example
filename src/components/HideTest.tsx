import React, { useState } from 'react';
import SigninTest from "./SigninTest";

const HideTest: React.FC = () => {
    const [visible, setVisible] = useState(false)

    return (
        <>
            <button onClick={() => {setVisible(!visible)}}>버튼</button>
            { visible ? `숨기기` : `보이기` }
            <hr/>
            { visible && <SigninTest/> }
        </>
    );
};

export default HideTest;