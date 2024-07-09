import { h, Fragment } from 'preact';
import { useContext, useState, useEffect } from 'preact/hooks';
import { TranslateContext } from '@denysvuika/preact-translate';
import './main.css';
export function ActualStatusSecond() {
    const { t } = useContext(TranslateContext);
    const [currentTime, setCurrentTime] = useState(new Date());
    // const [apiData, setApiData] = useState({
    //     measure_mode: "",
    //     upf2_filename: "",
    //     time_to_next_radon_value: "",
    //     dataset_number: "",
    //     experiment_number: ""
    // });

    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('/api/measure');
    //         if (!response.ok) {
    //             throw new Error('Network response was not ok');
    //         }
    //         const jsonData = await response.json();
    //         setApiData({
    //             measure_mode: jsonData.measure_mode,
    //             upf2_filename: jsonData.upf2_filename,
    //             time_to_next_radon_value: jsonData.time_to_next_radon_value,
    //             dataset_number: jsonData.dataset_number,
    //             experiment_number: jsonData.experiment_number
    //         });
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        // fetchData();
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="table_actual_second">
            <table>
                <tbody>
                    <tr>
                        <td>{t('time')}:</td>
                        <td>{currentTime.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td>{t('mode')}:</td>
                        <td>10 minute, diffusion</td>  
                    </tr>
                    <tr>
                        <td>{t('file')}:</td>
                        <td className="special_td_actual_status">AS000123_0032_20230830_2020.UPF2</td>
                    </tr>
                    <tr>
                        <td>{t('experiment_number')}:</td>
                        <td>0023</td>
                    </tr>
                    <tr>
                        <td>{t('dataset_number')}:</td>
                        <td>155</td>
                    </tr>
                    <tr>
                        <td>{t('time_to_next_Radon_value_(sec)')}:</td>
                        <td>374</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
