import React, { useState } from 'react'
import './Shapes.css'

const Shapes = () => {
    const [toggleShape, setToggleShape] = useState(true);

    const myShapes = () => {
        setToggleShape(!toggleShape)
    }

    return (
        <div className='shapes'>
            <span className={toggleShape ? "box" : "circle"}></span>
            <button onClick={myShapes}>Click Me!!!</button>
        </div>
    )
}

export default Shapes
