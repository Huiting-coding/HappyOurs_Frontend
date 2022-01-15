// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("---LOGIN RESPONSE---", res);
        wx.request({
          url: `${getApp().globalData.url}/login`,
          method: 'POST',
          data: {code: res.code},
          success: (res)=> {
            console.log(res)
            const user = res.data.currentUser
            // getApp().globalData.user = user
            wx.setStorageSync('user', user)
            wx.setStorageSync('headers', res.data.headers)
          }
          // fail(e){
          //   console.log(e)
          // }
        })
      }
    })
  },
  globalData: {
    userInfo: null,
    baseUrl: "http://localhost:3000/api/v1"
  }
})
