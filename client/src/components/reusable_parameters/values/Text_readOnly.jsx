import { h, Fragment } from 'preact'; 
import '../reusable.css';
import { useState } from 'preact/hooks';

export function Text_readOnly() {
    const [Text, setText] = useState('AS1.000A_12th May 2024');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <span>
            <input type="text" value={Text} className="text_read_only" readOnly/>
            </span>
            </form>
        </div>
        </>
    )
}