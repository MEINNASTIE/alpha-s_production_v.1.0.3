import { h, Fragment } from 'preact';
import './main.css'
export function DeviceSecond() {
    return (
        <div class="table_actual_second">
            {/* actual data fetch here */}
            <table>
                <tbody>
                <tr>
                    <td>IP-Address</td>
                    <td>192.168.012.214</td>
                </tr>
                <tr>
                    <td>Mask</td>
                    <td>255.255.255.000</td>  
                </tr>
                <tr>
                    <td>Gateway</td>
                    <td>192.168.012.001</td> 
                </tr>
                <tr>
                    <td>Supply voltage</td>
                    <td>16.5V</td>
                </tr>
                <tr>
                    <td>Battery voltage</td>
                    <td>6.3V</td>
                </tr>
                <tr>
                    <td>Battery status</td>
                    <td>Charging</td>
                </tr>
                <tr>
                    <td>Free data memory</td>
                    <td>2.5GB/4.0GB</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}