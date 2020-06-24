export interface QAprops {
    uid: number;
    qid: number;
    content: string;
    isSelf?: boolean;
}
export interface User {
  uid:number;
  username: string;
  password: string;
  des:string;
  email: string;
  regTime: Date;
  lastLoginTime: Date;
}
