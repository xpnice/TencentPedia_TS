export interface QAprops {
  uid: number;
  qid: number;
  content: string;
  likeNum: number;
  isLike: boolean;
}
export interface User {
  uid: number;
  username: string;
  password: string;
  des: string;
  email: string;
  regTime: Date;
  lastLoginTime: Date;
}

export interface Tip {
  type: number;
  tip: string;
  timeout?: number;
}
