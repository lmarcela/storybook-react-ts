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

const getStyles = ({ __sb }) => ({
  display: 'flex',
  flexDirection: __sb?.fd || 'column' as "column",
  maxHeight: __sb?.mh || 'auto',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap' as "wrap",
  height: '100%',
  gap: '10px 30px',
});

export const decorators = [
  (Story, { parameters }) => (
    <div style={getStyles(parameters)}>
      <Story />
    </div>
  ),
];

export default preview;
