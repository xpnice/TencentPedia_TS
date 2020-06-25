import store from '../store/index.ts';

export enum TipType {
  success,
  info,
  error
}
export default function Tip(tipType:any, tip:string, timeout: number = 2000) {
  const obj = { type: TipType[tipType], tip, timeout };
  store.dispatch('showTip', obj);
}
