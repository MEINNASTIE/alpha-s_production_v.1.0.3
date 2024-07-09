import { h, Fragment } from 'preact'; 
import '../reusable.css';
import { useState } from 'preact/hooks';

export function NumericSingleValue() {
    const [Numerical, setNumerical] = useState('-777');
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
            <input type="text" value={Numerical} onChange={handleNumericalChange} className="text" />
            </span>
            {NumericalError && <span style={{ color: 'red' }}>{NumericalError}</span>}
            </form>
            <div className="numeric_wrapper">
                {/* flexible data for change */}
                <div className="min_max">
                    <p>Min:&nbsp;<span>-99999</span></p>
                    <p>Max:&nbsp;<span>-99999</span></p>   
                </div>
                <p>Unit:&nbsp;<span>Bq/m&#179;</span></p>
            </div>
        </div>
        </>
    )
}
