module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'import',
      {
        libraryDirectory: 'components',
        libraryName: 'teaset',
        camel2DashComponentName: false,
        customName: name => {
          if (name === 'TopView') {
            return 'teaset/components/Overlay/TopView';
          } else if (name === 'Theme') {
            return 'teaset/themes/Theme';
          } else {
            return `teaset/components/${name}/${name}`;
          }
        },
      },
    ],
  ],
};
