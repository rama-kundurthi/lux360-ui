export const MenuOrientation = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal'
};

export const ThemeMode = {
  LIGHT: 'light',
  DARK: 'dark'
};

export const ThemeDirection = {
  LTR: 'ltr',
  RTL: 'rtl'
};

const config = {
  menuOrientation: MenuOrientation.HORIZONTAL,
  miniDrawer: false,
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 8,
  outlinedFilled: true,
  presetColor: 'theme2',
  i18n: 'en',
  themeDirection: ThemeDirection.LTR,
  container: false,
  layout: 'horizontal'
};

export default config;
