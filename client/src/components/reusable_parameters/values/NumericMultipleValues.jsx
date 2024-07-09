import { h, Fragment } from 'preact'; 
import '../reusable.css';
import { useState } from 'preact/hooks';

export function NumericMultipleValues() {
    const [numericalValues, setNumericalValues] = useState(['1.000', '1.001', '0.650', '0.234', '0.843', '1.1234567', '1.800', '1.700', '1.400', '3.200']);
    const [NumericalError, setNumericalError] = useState(''); 

    const handleNumericalChange = (index) => (event) => {
        const value = event.target.value;
        const newNumericalValues = [...numericalValues];
        newNumericalValues[index] = event.target.value;
        setNumericalValues(newNumericalValues);
        if (!/^[-+]?[0-9]*$/.test(value)) {
            setNumericalError('Values invalid, enter again!');
        } else {
           setNumericalError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <div className="numeric_multiple_wrapper">
            <form onSubmit={handleSubmit}>
            <span>
            <table>
                <tbody>
                {numericalValues.map((value, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                    <input
                        type="text"
                        value={value}
                        onChange={handleNumericalChange(index)}
                        className="text"
                    />
                    </td>
                </tr>
                ))}
                </tbody>
            </table>
            </span>
            {NumericalError && <span style={{ color: 'red' }}>{NumericalError}</span>}
            </form>
            <div className="numeric_wrapper">
                {/* flexible data for change */}
                <div className="min_max">
                    <p>Min:&nbsp;<span>0.1</span></p>
                    <p>Max:&nbsp;<span>2.0</span></p>   
                </div>
                <p>Unit:&nbsp;<span>--</span></p>
            </div>
        </div>
        </>
    )
}