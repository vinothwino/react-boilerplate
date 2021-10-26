import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import 'bootstrap/dist/css/bootstrap.css';
import 'assets/icomoon/style.css';
import 'react-toastify/dist/ReactToastify.css';
import theme from '../src/styles/theme'
const themes = [theme];
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}