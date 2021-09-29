import { addParameters } from '@storybook/react';
import 'tailwindcss/tailwind.css';

addParameters({
  darkMode: {
    classTarget: 'html',
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
  },
});
