import { use } from 'react';

import { SettingsContext } from '@/core/settings/SettingsContext';
import { type SettingsContextProps } from '@/core/settings/types';

const useSettings = (): SettingsContextProps => use(SettingsContext);

export default useSettings;
