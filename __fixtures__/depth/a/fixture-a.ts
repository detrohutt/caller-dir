import { callerDirname } from '../../../src/index';

export const valueA = callerDirname();

export const deferToB = () => callerDirname({ depth: 2 });

export const deferToC = () => callerDirname({ depth: 3 });
