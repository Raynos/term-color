const supportsColor = require('supports-color');
const ansiStyles = require('ansi-styles');

let TermColor = {};

const buildCode = (str, { open, close }) => `${open}${str}${close}`;

const buildColor = colorName => str =>
  !TermColor.enabled ? str : buildCode(str, ansiStyles[colorName]);

const createColorFunctions = colors =>
  colors.reduce(
    (colors, color) => ({
      ...colors,
      [color]: buildColor(color)
    }),
    {}
  );

const colors = [
  'black',
  'red',
  'green',
  'yellow',
  'blue',
  'magenta',
  'cyan',
  'white',
  'gray',
  'bgBlack',
  'bgRed',
  'bgGreen',
  'bgYellow',
  'bgBlue',
  'bgMagenta',
  'bgCyan',
  'bgWhite',
  'reset',
  'bold',
  'dim',
  'italic',
  'underline',
  'inverse',
  'hidden',
  'strikethrough'
];

TermColor = {
  enabled: supportsColor,
  ...createColorFunctions(colors)
};

module.exports = TermColor;
