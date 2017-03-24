const Ajax = require('robe-ajax')


// request a url, returning a promise
export default function request (url, options) {
  return Ajax.ajax({
    url,
    method: options.method || 'get',
    data: options.data || {},
    processData: options.method === 'get',
    dataType: 'JSON',
  }).done((data) => {
    return data
  })
}
