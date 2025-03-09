module.exports = {
  presets: ['babel-preset-expo'], // ✅ Ensure Expo's preset is included
  plugins: [
    ['babel-plugin-dotenv-import', { moduleName: '@env', safe: true, allowUndefined: false }]
  ],
};
