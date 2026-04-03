import { Dimensions } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const BASE_WIDTH = 375;
const MAX_SCALE = 1.25;

export const normalize = (size: number) => 
  Math.round(Math.min(size * (SCREEN_WIDTH / BASE_WIDTH), size * MAX_SCALE));
