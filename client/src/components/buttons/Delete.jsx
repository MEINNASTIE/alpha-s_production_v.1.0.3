import { TranslateContext } from '@denysvuika/preact-translate';
import { h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';

export function Delete() {
    const { t } = useContext(TranslateContext);

    return (
        <button class="action_button">
            {t('delete')}
        </button>
    )
}