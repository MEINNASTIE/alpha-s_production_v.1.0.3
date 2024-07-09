import { TranslateContext } from '@denysvuika/preact-translate';
import { h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';

export function Logout() {
    const { t } = useContext(TranslateContext);
    return (
        <button class="action_button logout_special">
            {t('log_out')}
        </button>
    )
}