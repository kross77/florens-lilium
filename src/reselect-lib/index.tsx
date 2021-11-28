import { createSelector } from 'reselect';

//@ts-ignore
export const create = (params: any): any => createSelector.apply(null, params);

export const convert = (type: string, params: any[], functions: {[key: string]: (...p: any) => any}) => {
   const fn = functions[type];
   return fn.apply(null, params);
}
