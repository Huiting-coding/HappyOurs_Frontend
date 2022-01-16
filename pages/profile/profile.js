// pages/profile/profile.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    hostOrNot: true,
    eventsForTest:
    [
        { event_name: "Gin Tasting", event_date: "2020-10-12", start_time:"7:00PM", location:"Jing'an", images_url:"/pages/profile/kelsey-knight-udj2tD3WKsY-unsplash.jpg"},
        { event_name: "Wine Tasting",  event_date: "2020-10-22", start_time:"9:00PM", location:"123 Julu Road",images_url:"/pages/profile/espolon-tequila-HHGtAZHZPlM-unsplash.jpg"},
        { event_name: "Wine Tasting",  event_date: "2020-10-22", start_time:"9:00PM", location:"123 Julu Road",images_url:"/pages/profile/espolon-tequila-HHGtAZHZPlM-unsplash.jpg"},
        { event_name: "Wine Tasting",  event_date: "2020-10-22", start_time:"9:00PM", location:"123 Julu Road",images_url:"/pages/profile/espolon-tequila-HHGtAZHZPlM-unsplash.jpg"}
    ]
    },
    onShow: function () {
      const page = this
      wx.request({
        header: wx.getStorageSync('headers'),
        url: `${getApp().globalData.baseUrl}/items/${page.data.options.id}`,
        success(res) {
          page.setData(res.data)
        }
      })
  },

    onLoad: function (options) {
      let page = this;
      wx.request({
        header: wx.getStorageSync('headers'),
        url: `${getApp().globalData.baseUrl}/users/${page.data.options.id}`,
        method:'GET',
        success(res){
          const user = res.data
          page.setData(
            user
          )
        }
      })
    },

    goToEventShow: function(options){
      let page =this;
      wx.request({
        header: wx.getStorageSync('headers'),
        url: `${getApp().globalData.baseUrl}/user/${page.data.options.event.id}`,
        method:'GET',
        success(res) {
          const event = res.data;
          page.setData(
            event
          );
        }
      })
    },
  
  goToCreate: function (e){
wx.navigateTo({
  url: '/pages/createEvent/createEvent',
})
  },

  goToEvents: function (e){
    wx.navigateTo({
      url: '/pages/maintest/main',
    })
      },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
    /**
     * 生命周期函数--监听页面加载
     */

    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            this.setData({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
            console.log('res:',res);
            console.log('userInfo:',userInfo);
          }
        })
      },

      checkingHostOrNot: function () {
        let currentUser = wx.getStorageSync('user')
        if (event.host_id == user.id) {
          this.setData({
            hostOrNot: true
          })
        }
      },


    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})