import { h, Fragment } from 'preact'; 
import '../reusable.css';
import { useState } from 'preact/hooks';

export function BooleanGroupROnly() {
    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        checkbox7: false,
        checkbox8: false,
        checkbox9: false,
        checkbox10: false,
        checkbox11: false,
        checkbox12: false,
        checkbox13: false,
        checkbox14: false,
        checkbox15: false
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
                <div>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox1"
                        checked={checkboxes.checkbox1}
                        onChange={handleCheckboxChange}
                    />
                    <p>Unexpected Hardware error</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox2"
                        checked={checkboxes.checkbox2}
                        onChange={handleCheckboxChange}
                    />
                    <p>Environmental sensor error</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox3"
                        checked={checkboxes.checkbox3}
                        onChange={handleCheckboxChange}
                    />
                    <p>Tamper sensor error</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox4"
                        checked={checkboxes.checkbox4}
                        onChange={handleCheckboxChange}
                    />
                    <p>Ext. FLASH memory error</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox5"
                        checked={checkboxes.checkbox5}
                        onChange={handleCheckboxChange}
                    />
                    <p>EE-PROM memory error</p>
                    </label>
                </div>
                <div>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox6"
                        checked={checkboxes.checkbox6}
                        onChange={handleCheckboxChange}
                    />
                    <p>Watchdog reset occured</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox7"
                        checked={checkboxes.checkbox7}
                        onChange={handleCheckboxChange}
                    />
                    <p>System clock needs to be set</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox8"
                        checked={checkboxes.checkbox8}
                        onChange={handleCheckboxChange}
                    />
                    <p>Parameter value error</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox9"
                        checked={checkboxes.checkbox9}
                        onChange={handleCheckboxChange}
                    />
                    <p>Contamination warning</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox10"
                        checked={checkboxes.checkbox10}
                        onChange={handleCheckboxChange}
                    />
                    <p>Low supply voltage</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox11"
                        checked={checkboxes.checkbox11}
                        onChange={handleCheckboxChange}
                    />
                    <p>Very low supply voltage</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox12"
                        checked={checkboxes.checkbox12}
                        onChange={handleCheckboxChange}
                    />
                    <p>High voltage fall</p>
                    </label>
                </div>
                <div>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox13"
                        checked={checkboxes.checkbox13}
                        onChange={handleCheckboxChange}
                    />
                    <p>Acquisition running</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox14"
                        checked={checkboxes.checkbox14}
                        onChange={handleCheckboxChange}
                    />
                    <p>New radon Value</p>
                    </label>
                    <label>
                    <input
                        type="checkbox"
                        name="checkbox15"
                        checked={checkboxes.checkbox15}
                        onChange={handleCheckboxChange}
                    />
                    <p>Pump running</p>
                    </label>
                </div>
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