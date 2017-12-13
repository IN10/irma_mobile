import { AppRegistry } from 'react-native';
import { Sentry } from 'react-native-sentry';

import Root from './components/Root';

Sentry.config('https://04fd1cdaec154d55ae70458a3618cefa:f5f4fafac9e848e8b2a4f0752d4d0ee0@sentry.io/226950').install();
AppRegistry.registerComponent('IRMA', () => Root);
