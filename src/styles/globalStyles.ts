import { globalCss } from 'stitches.config';

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    m: 0,
    p: 0,
    listStyle: 'none',
    textDecoration: 'none',
  },
  body: {
    backgroundColor: '$background',
    fontFamily:
      'Yu Gothic, yugothic, ヒラギノ角ゴ ProN, Hiragino Kaku Gothic ProN, メイリオ, meiryo, sans-serif',
  },
});
