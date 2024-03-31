import { component$ } from "@builder.io/qwik";

export const ColorSchemeDetector = component$(() => (
  <script
    dangerouslySetInnerHTML={`
  {
    const colorSchemeKey = 'color-scheme';
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const colorScheme = localStorage.getItem(colorSchemeKey);
    if (colorScheme) {
      document.documentElement.className = colorScheme;
    } else {
      const theme = darkModeMediaQuery.matches ? 'dark' : 'light';
      document.documentElement.className = theme;
      localStorage.setItem('color-scheme', theme);
    }

    window.addEventListener('load', () => {
      const themeSwitch = document.getElementById('theme-switch-checkbox');
      themeSwitch.checked = document.documentElement.className === 'dark';

      darkModeMediaQuery.addEventListener('change', (e) => {
        const theme = e.matches ? 'dark' : 'light';
        document.documentElement.className = theme;
        localStorage.setItem('color-scheme', theme);
        themeSwitch.checked = theme === 'dark';
      });
    });
  }
`}
  />
));
