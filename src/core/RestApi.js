import { host } from '../config';
import fetch from '../core/fetch';

let instance = null;
const TIMEOUT = 10000;

class RestApi {
  constructor() {
    if (instance) return instance;
    instance = this;
    this.baseURI = `http://${host}`;
    this.headers = { Accept: 'application/json', 'Content-Type': 'application/json' };
    this.dealResponse = this.dealResponse.bind(this);
    // this.setAuthToken = this.setAuthToken.bind(this);
    // this.deleteAuthToken = this.deleteAuthToken.bind(this);
  }

  createProduct(title, costPrice) {
    return this.post('/product/create', { title, costPrice });
  }


  dealResponse(response) {
    let self = this;
    return response.text().then(text => {
      try {
        if (__DEV__) {
          console.log(self.headers);
          console.log(response.url);
          console.log(text);
        }
        return JSON.parse(text);
      } catch (e) {
        if (__DEV__) {
          console.error(text);
        }
        throw e;
      }
    }).catch(e => ({status: 'ERROR', errorCode: 0, errorMessage: '网络错误，请重试!'}));
  }

  get(uri) {
    return fetch(this.baseURI + uri, {
      method: 'GET',
      headers: this.headers,
      timeout: TIMEOUT,
    })
    .then(this.dealResponse)
    .catch((e) => {
      return { status: 'ERROR', errorCode: 0, errorMessage: '网络错误，请重试!' };
    });
  }

  post(uri, params = {}) {
    return fetch(this.baseURI + uri, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(params),
      timeout: TIMEOUT,
    })
    .then(this.dealResponse)
    .catch((e) => {
      return { status: 'ERROR', errorCode: 0, errorMessage: '网络错误，请重试!' };
    });
  }

  patch(uri, params = {}) {
    return fetch(this.baseURI + uri, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(params),
      timeout: TIMEOUT,
    })
    .then(this.dealResponse)
    .catch((e) => {
      return { status: 'ERROR', errorCode: 0, errorMessage: '网络错误，请重试!' };
    });
  }

  delete(uri, params = {}) {
    return fetch(this.baseURI + uri, {
      method: 'DELETE',
      headers: this.headers,
      body: JSON.stringify(params),
      timeout: TIMEOUT,
    })
    .then(this.dealResponse)
    .catch((e) => {
      return { status: 'ERROR', errorCode: 0, errorMessage: '网络错误，请重试!' };
    });
  }
}

export default new RestApi();
