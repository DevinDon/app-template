/** Material theme with primary color. */
export interface Theme {
  name: string;
  color: string;
}

/** Theme list. */
export interface ThemeList {
  'light-coless-theme': Theme;
  'dark-coless-theme': Theme;
  'light-blue-theme': Theme;
  'dark-cyan-theme': Theme;
  'light-indigo-theme': Theme;
  'dark-teal-theme': Theme;
}
