import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Exit } from '../buttons/Exit';
import './modals.css';
import WifiIcon from '../../assets/wifi-solid.svg';
export function WiFiNetworks({ onClose }) {
    // Fetch Wi-Fi data simulated
    const fetchWiFiData = () => {
        return [
            { id: 1, ssid: 'BERTIN-WIFI-NET', isSelected: false },
            { id: 2, ssid: 'FRITZ!Box 7590 TG', isSelected: false },
            { id: 3, ssid: 'CNIM-GUEST', isSelected: false },
            { id: 4, ssid: 'STLB500', isSelected: false },
            { id: 5, ssid: 'AS000567ACCESS_Point', isSelected: false },
            { id: 6, ssid: 'BERTIN-WIFI-NET', isSelected: false },
            { id: 7, ssid: 'FRITZ!Box 7590 TG', isSelected: false },
            { id: 8, ssid: 'CNIM-GUEST', isSelected: false },
            { id: 9, ssid: 'STLB500', isSelected: false },
            { id: 10, ssid: 'AS000567ACCESS_Point', isSelected: false }
        ];
    };

    const [data, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);

    useEffect(() => {
        const initialData = fetchWiFiData();
        setData(initialData);
    }, []);

    const handleRowClick = (id) => {
        setSelectedRow(id);
        saveSelectedRow(id);
    };

    const saveSelectedRow = (id) => {
        setTimeout(() => {
            setSelectedRow(null);
        }, 10000); 
    };

    return (
        <div className="modal_overlay">
            <div className="modal_content_wifi">
                <div>
                    <h3>Wi-Fi networks</h3>
                </div>
                <div className="modal_table_container">
                    <table className="modal_table">
                        <tbody>
                            {data.map((item, index) => (
                                <tr
                                    key={index}
                                    className={item.id === selectedRow ? 'selected' : ''}
                                    onClick={() => handleRowClick(item.id)}
                                >
                                    <td class="td_special">
                                        <img src={WifiIcon} alt="WifiIcon" />{item.ssid}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div onClick={onClose} class="wifi_button_special">
                    <Exit />
                </div>
            </div>
        </div>
    );
}


