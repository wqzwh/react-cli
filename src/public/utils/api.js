import axios from 'axios'
import jsonp from 'jsonp'
import Q from 'q'

import C from '../conf'

function ajax(url, type, options) {

  return Q.Promise((resolve, reject) => {
    axios({
        method: type,
        url: C.HOST + url,
        // timeout:1000,
        // responseType:'stream',
        params: options
      })
      .then((result) => {
        if (result && result.status === 200) {
          // if (!result.data.code) {
          //   location.href = 'http://ssa.jd.com/sso/login?ReturnUrl=' + location.href;
          //   resolve()
          // }
          if (result.data.code === 200) {
            resolve(result.data.data);
          } else if (result.data.code === 403) {
            location.href = './static/html/403.html'
          } else if (result.data.code === 521) {
            location.href = './static/html/521.html'
          } else if (result.data.code === 520) {
            reject({
              error: true,
              msg: result.data.msg,
              code: result.data.code
            });
          } else {
            reject({
              error: true,
              msg: result.data.msg,
              code: result.data.code
            });
          }
        } else {
          reject({
            errno: result.errno,
            msg: result.msg
          });
        }
      })
      .catch(function(error) {
        // console.log(error, url);
        if (error.request.status === 0) {
          // location.href = 'http://ssa.jd.com/sso/login?ReturnUrl=' + location.href;
        }
        resolve()
      });
  })
}

const config = {
  get(url, options) {
    const _self = this;
    return Q.Promise((resolve, reject) => {
      ajax(url, 'get', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  post(url, options) {
    const _self = this;
    return Q.Promise((resolve, reject) => {
      ajax(url, 'post', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  put(url, options) {
    const _self = this;
    return Q.Promise((resolve, reject) => {
      ajax(url, 'put', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  delete(url, options) {
    const _self = this;
    return Q.Promise((resolve, reject) => {
      ajax(url, 'delete', options)
        .then((data) => {
          resolve(data);
        }, (error) => {
          reject(error);
        });
    })
  },

  jsonp(url, options) {
    const _self = this;
    return Q.Promise((resolve, reject) => {
      jsonp(`${C.JSONP_HOST}${url}${options}`, null, function(err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      })
    })
  }
};

export default config;
