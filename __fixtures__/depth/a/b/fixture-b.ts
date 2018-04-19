import { deferToB, deferToC } from '../fixture-a';

export const valueB = deferToB();

export const deferredCall = () => deferToC();
