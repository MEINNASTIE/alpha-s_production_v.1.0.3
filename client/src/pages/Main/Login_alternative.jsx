import { h, Fragment } from 'preact';
import './login.css'
export function ActualStatusAlternative() {
    
    return (
        <div class="table_actual_alternative">
            {/* actual data fetch here */}
            <table>
                <tbody>
                <tr>
                    <td>Rn</td>
                    <td>437&#177;45</td>
                    <td>Bq/m&#179;</td>
                </tr>
                <tr>
                    <td>T</td>
                    <td>23.1</td>
                    <td>&#176;C</td>
                </tr>
                <tr>
                    <td>P</td>
                    <td>1013.4</td>
                    <td>mBar</td>
                </tr>
                <tr>
                    <td>rH</td>
                    <td>54.2</td>
                    <td>&#37;</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}