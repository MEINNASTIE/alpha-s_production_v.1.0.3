import { h, Fragment } from 'preact';
import { useBatteryStatus } from "../hooks/useBatteryStatus";
import { useContext } from 'preact/hooks';
import { TranslateContext } from '@denysvuika/preact-translate';
export function BatteryStatus() {
    const batteryStatus = useBatteryStatus();
    const { level } = batteryStatus;
    const batteryPercentage = level * 100;
    const { t } = useContext(TranslateContext);

    let statusMessage = 'Battery full!';
    if (batteryPercentage <= 20) {
        statusMessage = `${t('battery_low')}!`;
    } else if (batteryPercentage <= 50) {
        statusMessage = 'Battery medium!';
    }

    return (
        <div class="battery_status">
            <p>{t('battery_status')}:</p>
            <p>{statusMessage}</p>
        </div>
    );
}
