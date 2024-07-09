import { h, Fragment } from 'preact'; 
import '../reusable.css';
import { useState } from 'preact/hooks';

export function BooleanGroupRW() {
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
      });

    const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
        setCheckboxes((prev) => ({
          ...prev,
          [name]: checked,
    }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <div>
            <form onSubmit={handleSubmit}>
            <div className="numeric_wrapper boolean_box">
                <label>
                <input
                    type="checkbox"
                    name="checkbox1"
                    checked={checkboxes.checkbox1}
                    onChange={handleCheckboxChange}
                />
                <p>Enable Environmental Sensor</p>
                </label>
                <label>
                <input
                    type="checkbox"
                    name="checkbox2"
                    checked={checkboxes.checkbox2}
                    onChange={handleCheckboxChange}
                />
                <p>Enable tamper sensor</p>
                </label>
                <label>
                <input
                    type="checkbox"
                    name="checkbox3"
                    checked={checkboxes.checkbox3}
                    onChange={handleCheckboxChange}
                />
                <p>Enable flow mode</p>
                </label>
            </div>
            </form>
            <div className="numeric_wrapper">
                {/* flexible data for change */}
                <p>Value:&nbsp;<span>00000007h</span></p>
            </div>
        </div>
        </>
    )
}