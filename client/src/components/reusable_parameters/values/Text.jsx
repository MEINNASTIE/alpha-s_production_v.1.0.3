import { h, Fragment } from 'preact'; 
import '../reusable.css';
import { useState } from 'preact/hooks';

export function Text() {
    const [Text, setText] = useState('CH12X456');
    const [TextError, setTextError] = useState(''); 

    const handleTextChange = (event) => {
        const value = event.target.value;
    setText(value);

    if (value !== 'valid') {
        setTextError('Text invalid, enter again!');
    } else {
        setTextError('');
    }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <span>
            <input type="text" value={Text} onChange={handleTextChange} className="text" />
            </span>
            {TextError && <span style={{ color: 'red' }}>{TextError}</span>}
            </form>
        </div>
        </>
    )
}