export default function ({ $axios, redirect, error, store }) {
    $axios.onRequest((config) => {
      // console.log('Making request to ' + config.url)
    })
  
    $axios.onError((error) => {
      const code = parseInt(error.response && error.response.status)
      if (code === 400) {
        redirect('/400')
      }
    })
    // Add a request interceptor
    $axios.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        config.headers.common.Authorization = store.getters.token
        return config
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error)
      }
    )
  
    // Add a response interceptor
    $axios.interceptors.response.use(
      function (response) {
        // Do something with response data
        // console.log('response interceptor', response);
        return response.data
      },
      function (error) {
        // Do something with response error
        return Promise.reject(error)
      }
    )
  }
  