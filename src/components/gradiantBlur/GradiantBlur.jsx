import React from 'react'
import './GradiantBlur.scss'

const GradiantBlur = () => {
    const items = [];
    for (let i = 0; i < 100; i++) {
        items.push(i);
    }
    return (<>
    <div id="wrapper">
            <ul>
                {items.map((item, index) => (
                    <li key={index}>Item {index}</li>
                ))}
            </ul>
        </div>
        <div class="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div></>
    )
}

export default GradiantBlur