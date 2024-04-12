import { addons } from '@storybook/manager-api';
import DenaliTheme from './DenaliTheme';

import './style.css';

addons.setConfig({
  theme: DenaliTheme
});
