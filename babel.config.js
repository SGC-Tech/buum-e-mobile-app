module.exports = {
  presets: ["babel-preset-expo"],
  env: {},
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: ["./"],
        alias: {
          "#": "./app",
          "#app": "./src",
          "#assets": "./src/assets",
          "#components": "./src/components",
          "#hooks": "./src/hooks",
          "#lang": "./src/lang",
          "#lib": "./src/lib",
          "#navs": "./src/navs",
          "#screens": "./src/screens",
          "#services": "./src/services",
          "#static": "./src/static",
          "#themes": "./src/themes",
          "#utils": "./src/utils",
          "#authentication": "./src/features/authentication",
          "#authorization": "./src/features/authorization",
          "#announcements": "./src/features/announcements",
          "#home": "./src/features/home",
          "#errors": "./src/features/errors",
          "#profile": "./src/features/profile",
          "#products": "./src/features/products",
          "#orders": "./src/features/orders",
          "#virtual-pos": "./src/features/virtual-pos",
          "#notifications": "./src/features/notifications",
        },
      },
    ],
    "react-native-reanimated/plugin",
    // require.resolve("expo-router/babel"),
  ],
};
