/** Material theme with primary color. */
export interface Theme {
  name: string;
  primary: string;
  accent: string;
  warn: string;
}

export interface ThemeGroup {
  name: string;
  themes: Theme[];
}
