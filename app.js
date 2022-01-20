// app.js
App({
  onLaunch() {
    
    // 展示本地存储能力
    // let user = wx.getStorageSync("user")
    // if (user) {

    // }
    // // console.log("already logged in")
    // if (!user) {
    //   console.log("need login")
    const app = this
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log("---LOGIN RESPONSE---", res);
        wx.request({
          url: `${app.globalData.baseUrl}/login`,
          method: 'POST',
          data: {code: res.code},
          success: (res)=> {
            console.log(res)
            const user = res.data.currentUser
            getApp().globalData.user = user
            wx.setStorageSync('user', user)
            wx.setStorageSync('headers', res.data.headers)
            // wx.event.emit('headersready')
          },
          fail(e){
            console.log(e)
          }
        })
      }
      })
    // }
  },

  globalData: {
    userInfo: null,
    // baseUrl: "http://localhost:3000/api/v1"
    baseUrl: "https://happyours.shanghaiwogeng.com/api/v1"
  }
})
