/* eslint-disable no-unused-expressions */
import axios from 'axios';

const TIMEOUT = 3000;
const BaseURL = 'http://localhost:3000';
async function SendHttp(
  url: string,
  params: any,
  body: object | null,
  method: any,
  headers: object,
) {
  return new Promise((resolve) => {
    axios({
      url: BaseURL + url,
      method,
      data: {
        authorization: {
          id: Number(localStorage.getItem('id') || 0),
        },
        data: body,
      },
      params: {
        authorization: Number(localStorage.getItem('id')),
        ...params,
      },
      headers: {
        ...headers,
      },
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        resolve({
          status: 1,
          message: `请求出错${e}`,
        });
      });
  });
}

const SHOW = true;

const _RawHttp = {
  get: (url: string, params: object):any => {
    SHOW && console.log(`GET请求 ${url}`, params);
    return SendHttp(url, params, null, 'GET', {});
  },
  post: (url: string, body: object, params = {}):any => {
    SHOW && console.log(`POST请求 ${url}`, body, params);
    return SendHttp(url, params, body, 'POST', {});
  },
  put: (url: string, body: object, params: object = {}):any => {
    SHOW && console.log(`PUT请求 ${url}`, body, params);
    return SendHttp(url, params, body, 'PUT', {});
  },
  delete: (url: string, body: object, params: object = {}):any => {
    SHOW && console.log(`DEL请求 ${url}`, body, params);
    return SendHttp(url, params, body, 'DELETE', {});
  },
};

export const MockRequest = <T>(body: T, time = TIMEOUT) => new Promise<T>((resolve) => {
  setTimeout(() => {
    resolve(body);
  }, time);
});

export default _RawHttp;
