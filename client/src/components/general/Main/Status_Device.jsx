import { h, Fragment } from 'preact';
import './main.css'
export function Device() {
    return (
        <div class="table_actual_second">
            {/* actual data fetch here */}
            <table>
                <tbody>
                <tr>
                    <td>Time</td>
                    <td>21.07.2023 12:23:43</td>
                </tr>
                <tr>
                    <td>Total operation hours</td>
                    <td>247.4h</td>  
                </tr>
                <tr>
                    <td>Battery operation hours</td>
                    <td>112.5h</td> 
                </tr>
                <tr>
                    <td>Pump operation hours</td>
                    <td>0023</td>
                </tr>
                <tr>
                    <td>Total exposure</td>
                    <td>155</td>
                </tr>
                <tr>
                    <td>Exposure background</td>
                    <td>347</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}