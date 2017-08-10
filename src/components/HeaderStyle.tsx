import { style, keyframes } from 'typestyle';

export const arr: Direction[] = ['normal', 'reverse', 'alternate'];

const appLogoSpin = keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(360deg)' }
});

type Direction = 'normal' | 'reverse' | 'alternate';

export const appLogo = (direction: Direction) => style({
  height: '80px',
  animationName: appLogoSpin,
  animationDuration: '20s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  animationDirection: direction
});

export const AppHeader = style({
  backgroundColor: '#222',
  height: '150px',
  padding: '20px',
  color: 'white'
});