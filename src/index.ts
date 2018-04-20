import { dirname } from 'path';

export function callerDirname({ depth = 1 } = {}): string {
  if (typeof depth !== 'number' || depth < 1 || Math.floor(depth) !== depth)
    throw new Error('Depth must be a positive integer.');

  /* Start borrowed/modified code */
  // https://github.com/sindresorhus/callsites/blob/master/index.js
  const _ = Error.prepareStackTrace;
  Error.prepareStackTrace = (_, stack) => stack;
  const stack = new Error().stack!.slice(depth);
  Error.prepareStackTrace = _;

  // https://github.com/sindresorhus/caller-callsite/blob/master/index.js
  const caller = (stack as any).find((c: NodeJS.CallSite) => c.getTypeName() !== null);
  /* End borrowed/modified code */

  return dirname(caller.getFileName());
}
