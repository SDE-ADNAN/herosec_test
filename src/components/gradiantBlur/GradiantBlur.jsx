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
                {/* <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
                <li>Item 8</li>
                <li>Item 9</li>
                <li>Item 10</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
                <li>Item 8</li>
                <li>Item 9</li>
                <li>Item 10</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
                <li>Item 8</li>
                <li>Item 9</li>
                <li>Item 10</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
                <li>Item 8</li>
                <li>Item 9</li>
                <li>Item 10</li>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
                <li>Item 7</li>
                <li>Item 8</li>
                <li>Item 9</li>
                <li>Item 10</li> */}
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