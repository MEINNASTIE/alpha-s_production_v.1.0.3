import { h, Fragment } from 'preact'; 
import '../reusable.css';
import { useState } from 'preact/hooks';

export function Enumeration() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <div className="enumeration_wrapper">
            <form onSubmit={handleSubmit}>
            <span>
                <input type="radio" name="numerical_unit" class="radio" checked/> 
                <p>9600</p>
            </span>
            <span>
                <input id="auto" type="radio" name="numerical_unit" class="radio"/> 
                <p>19200</p> 
            </span>
            <span>
                <input id="auto" type="radio" name="numerical_unit" class="radio"/> 
                <p>38400</p> 
            </span>
            <span>
                <input id="auto" type="radio" name="numerical_unit" class="radio"/> 
                <p>56700</p> 
            </span>
            <span>
                <input id="auto" type="radio" name="numerical_unit" class="radio"/> 
                <p>115200</p> 
            </span>
            </form>
            <div className="enumeration_single">
                {/* flexible data for change */}
                <p>Unit:&nbsp;</p>
                <p>Baud</p>
            </div>
        </div>
        </>
    )
}