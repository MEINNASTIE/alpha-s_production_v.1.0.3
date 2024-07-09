import { h, Fragment } from 'preact'; 
import '../reusable.css';
import { useState } from 'preact/hooks';

export function IPAddress() {
    const [ipSegments, setIpSegments] = useState({ ip1: '192', ip2: '168', ip3: '12', ip4: '214' });
    const [isFormChanged, setIsFormChanged] = useState(false);
    const [radonBackgroundError, setRadonBackgroundError] = useState('');

    const handleSegmentChange = (event, setter, segment) => {
        const value = event.target.value;
        setIsFormChanged(true);

        if (/^\d{0,3}$/.test(value) && value <= 255) {
            setter(prev => ({ ...prev, [segment]: value }));
            setRadonBackgroundError('Please enter a numerical value');
        } else {
            setRadonBackgroundError('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
        <div className="ip_address_wrapper">
            <form onSubmit={handleSubmit}>
                <input type="text" value={ipSegments.ip1} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip1')} className="text" maxLength="3" />
                <input type="text" value={ipSegments.ip2} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip2')} className="text" maxLength="3" />
                <input type="text" value={ipSegments.ip3} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip3')} className="text" maxLength="3" />
                <input type="text" value={ipSegments.ip4} onChange={(e) => handleSegmentChange(e, setIpSegments, 'ip4')} className="text" maxLength="3" />
            </form>
            {radonBackgroundError && <span class="error_ethernet" style={{ color: 'red', fontFamily: 'CenturyGothic_bold' }}>{radonBackgroundError}</span>}
        </div>
        </>
    )
}