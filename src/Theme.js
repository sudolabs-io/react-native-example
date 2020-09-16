import { rem } from 'polished';

export const BORDER_WIDTH = {
  S: '1px',
  M: '2px',
  L: '3px'
};

export const COLOR = {
  WHITE: '#FFFFFF',
  BLACK: '#000',
  PRIMARY_1: '#126554',
  PRIMARY_2: '#EBF2F1',
  SECONDARY_1: '#FA5252',
  SECONDARY_2: '#E64980',
  SECONDARY_3: '#BE4BDB',
  SECONDARY_4: '#7950F2',
  SECONDARY_5: '#4C6EF5',
  SECONDARY_6: '#228BE6',
  SECONDARY_7: '#15AABF',
  SECONDARY_8: '#12B886',
  SECONDARY_9: '#40C057',
  SECONDARY_10: '#82C91E',
  SECONDARY_11: '#FAB005',
  SECONDARY_12: '#FD7E14',
  SECONDARY_13: '#EB0E0E',
  GRAYSCALE_1: '#181B19',
  GRAYSCALE_2: '#545554',
  GRAYSCALE_3: '#949494',
  GRAYSCALE_4: '#CECECE',
  GRAYSCALE_5: '#E1E1E1',
  GRAYSCALE_6: '#F8F8F8',
  GRAYSCALE_7: '#333333'
};

export const GRADIENT = {
  GRADIENT_1: '180deg, rgba(24, 27, 25, 0) 0%, rgba(24, 27, 25, 0.03) 100%',
  GRADIENT_1_HOVER:
    '180deg, rgba(24, 27, 25, 0) 0%, rgba(24, 27, 25, 0.05) 100%',
  GRADIENT_2: '180deg, rgba(24, 27, 25, 0) 0%, rgba(24, 27, 25, 0.03) 100%',
  GRADIENT_2_HOVER:
    '180deg, rgba(24, 27, 25, 0) 0%, rgba(24, 27, 25, 0.05) 100%'
};

export const BOX_SHADOW = {
  DARK: '0px 1px 2px rgba(13, 64, 128, 0.19)',
  INNER: 'inset 1px 1px 4px rgba(0, 0, 0, 0.08)',
  ELEVATION_1: '0px 5px 10px rgba(24, 27, 25, 0.07)',
  ELEVATION_2: '0px 5px 20px rgba(24, 27, 25, 0.08)',
  ELEVATION_3: '0px 5px 30px rgba(24, 27, 25, 0.1)',
  ELEVATION_4: '0px 5px 40px rgba(24, 27, 25, 0.1)',
  ELEVATION_5: '0px 5px 20px rgba(24, 27, 25, 0.1)',
  ELEVATION_6: '0px 5px 20px rgba(0, 0, 0, 0.1)'
};

export const SPACE = {
  XXS: rem(5),
  XS: rem(10),
  S: rem(15),
  M: rem(20),
  L: rem(30),
  XL: rem(40),
  XXL: rem(60),
  XXXL: rem(80),
  XXXXL: rem(100),
  XXXXXL: rem(120)
};

export const FONT_SIZE = {
  XS: rem(12),
  S: rem(14),
  M: rem(16),
  L: rem(20),
  XL: rem(24),
  XXL: rem(32),
  XXXL: rem(36),
  XXXXL: rem(48)
};

export const FONT_WEIGHT = {
  THIN: 100,
  EXTRA_LIGHT: 200,
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  SEMI_BOLD: 600,
  BOLD: 700,
  BLACK: 800,
  SUPER: 900
};

export const RADIUS = {
  RADIUS_1: rem(1),
  RADIUS_2: rem(2),
  RADIUS_3: rem(4),
  RADIUS_4: rem(6),
  RADIUS_5: rem(8),
  RADIUS_6: rem(10),
  RADIUS_7: rem(3),
  CIRCLE: '50%'
};
