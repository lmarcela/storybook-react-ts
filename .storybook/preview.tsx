import React, { CSSProperties } from 'react';
import 'minireset.css'
import '../styles/globals.css'
import '../styles/tokens.css'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  flexWrap: "wrap",
  height: "100%",
  gap: "10px 30px",
};

export const decorators = [
  (Story) => (
    <div style={styles}>
      <Story />
    </div>
  ),
];

export default preview;
