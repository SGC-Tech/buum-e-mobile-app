module.exports = {
  presets: ['babel-preset-expo'],
  env: {},
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ['./src'],
        alias: {
          '#': './src/app',
          '#components': './src/components',
          '#themes': './src/themes',
        },
      },
    ],
    'react-native-reanimated/plugin',
    // require.resolve("expo-router/babel"),
  ],
};
