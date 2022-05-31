import React, {useState} from 'react';

const HelloWorld = () => {
    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false)

    const toggle = () => value === 'hello' && setVisible(prev => !prev)
    const onChange = (e) => setValue(e.target.value)

    return (
        <div>
            <input onChange={onChange} type="text" id="search"/>
            <button onClick={toggle} id="toggle">HELLO WORLD</button>
            {visible && <h1 id="hello">HELLO WORLD</h1>}
        </div>
    );
};

export default HelloWorld;
