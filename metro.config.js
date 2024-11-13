const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');
const {withNativeWind} = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */

const config = wrapWithReanimatedMetroConfig(
  mergeConfig(getDefaultConfig(__dirname), {
    /* your config */
  }),
);
module.exports = withNativeWind(config, {input: './global.css'});
