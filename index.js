/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'


Icon.loadFont();

AppRegistry.registerComponent(appName, () => App);
