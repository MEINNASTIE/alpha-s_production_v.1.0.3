import { h, Fragment } from 'preact'; 
import '../reusable.css';
import { useState } from 'preact/hooks';

export function NumericSingleValue_readOnly() {
    const [Numerical, setNumerical] = useState('+25.7');
    const [NumericalError, setNumericalError] = useState(''); 

    const handleNumericalChange = (event) => {
        const value = event.target.value;
        setNumerical(value);
        if (!/^[-+]?[0-9]*$/.test(value)) {
            setNumericalError('Please enter a numerical value');
        } else {
           setNumericalError('');
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
            <input type="text" value={Numerical} onChange={handleNumericalChange} className="text_read_only" readOnly/>
            </span>
            {NumericalError && <span style={{ color: 'red' }}>{NumericalError}</span>}
            </form>
            <div className="numeric_wrapper">
                {/* flexible data for change */}
                <div className="min_max">
                    <p>Min:&nbsp;<span>-25.0</span></p>
                    <p>Max:&nbsp;<span>-65.0</span></p>   
                </div>
                <p>Unit:&nbsp;<span>&#176;C</span></p>
            </div>
        </div>
        </>
    )
}