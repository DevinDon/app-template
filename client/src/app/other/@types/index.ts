/** Material theme with primary color. */
export interface Theme {
  name: string;
  backgroundColor: string;
  color: string;
}

export interface ThemeGroup {
  name: string;
  themes: Theme[];
}
