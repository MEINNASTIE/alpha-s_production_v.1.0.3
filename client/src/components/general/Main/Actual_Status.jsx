import { h, Fragment } from 'preact';
import './main.css';
import { useEffect, useState } from 'preact/hooks';

export function ActualStatus() {
    // const [data, setData] = useState({
    //     rn: '',
    //     t: '',
    //     p: '',
    //     rh: ''
    // });

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('/api/measure');
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const jsonData = await response.json();
    //         setData({
    //             rn: jsonData.rn,
    //             t: jsonData.t,
    //             p: jsonData.p,
    //             rh: jsonData.rh
    //         });
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData(); 
    //     const intervalId = setInterval(fetchData, 1000); // interval fetch (1 sec)
    //     // cleanup
    //     return () => clearInterval(intervalId);
    // }, []); 

    return (
        <div className="table_actual">
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
    );
}
