/**
 * Created by kiny on 16/9/19.
 */

// @flow

export function repeat(str: string, num: string, join: string = ''): string {
  return (new Array(num)).fill(str).join(join);
}