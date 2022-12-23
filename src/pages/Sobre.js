
import React from 'react'
import fotojho from "../assets/images/fotojho.png"
import { ClassNames } from "@emotion/react";
export default () => <img src={fotojho}/>;



function contato() {
    const onBlur = (e) => {
        console.log(e.target.value);
    }
    return (
        <div>
            <h1>Contato</h1>
            <input type="text" onBlur={onBlur} />
        </div>
    );
}
