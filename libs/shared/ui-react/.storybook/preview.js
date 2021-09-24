import { addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import 'tailwindcss/tailwind.css';

addParameters({
  darkMode: {
    classTarget: 'html',
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true,
  },
});

addDecorator(withKnobs);
