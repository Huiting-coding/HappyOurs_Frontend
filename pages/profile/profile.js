// pages/profile/profile.js
const app = getApp()
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
        { name: "Gin Tasting",begins_at: "2020-10-12", start_time:"7:00PM", location:"Jing'an", event_image_urls:"/pages/profile/kelsey-knight-udj2tD3WKsY-unsplash.jpg"},
        { name: "Wine Tasting",  begins_at: "2020-10-22", start_time:"9:00PM", location:"123 Julu Road",event_image_urls:"/pages/profile/espolon-tequila-HHGtAZHZPlM-unsplash.jpg"},
        { name: "Wine Tasting",  begins_at: "2020-10-22", start_time:"9:00PM", location:"123 Julu Road",event_image_urls:"/pages/profile/espolon-tequila-HHGtAZHZPlM-unsplash.jpg"},
        { name: "Wine Tasting",  begins_at: "2020-10-22", start_time:"9:00PM", location:"123 Julu Road",event_image_urls:"/pages/profile/espolon-tequila-HHGtAZHZPlM-unsplash.jpg"}
    ]
    },
    onShow: function () {
      // const page = this
      // wx.request({
      //   header: wx.getStorageSync('headers'),
      //   url: `${getApp().globalData.baseUrl}/items/${page.data.options.id}`,
      //   success(res) {
      //     page.setData(res.data)
      //   }
      // })
  },

    onLoad: function (options) {
      if (wx.getUserProfile) {
        this.setData({
          canIUseGetUserProfile: true
        })
      };
        // const page = this
        console.log('headers:', wx.getStorageSync('headers'));
        const headers = wx.getStorageSync('headers')
        console.log('heeadere',headers)
        if (headers){
          this.getUser()
        }
      },
    getUser: function(options){
      console.log('options',options)

      const page = this
      // const id= app.globalData.user.id
      const user = wx.getStorageSync('user')
      const id = user.id
      // console.log('user',user)
      console.log("id",id)
      wx.request({
        header: wx.getStorageSync('headers'),
        url: `${getApp().globalData.baseUrl}/users/${id}`,
        method: "GET",
        success(res) {
          console.log("get user by id",res)
          const events_as_host = res.data.user.events_as_host;
          const events_as_goer = res.data.user.events_as_goer;
          page.setData({
            events_as_host: events_as_host,
            events_as_goer: events_as_goer,
          })
        }
      })
    },

  //   wx.request({
  //     header: wx.getStorageSync('headers'),
  //     url: `${getApp().globalData.baseUrl}/users/${id}`,
  //     method: 'GET',
  //     success(res) {
  //         console.log("get user by id",res)
  //         page.setData({
  //       eventsAsHost: res.data.events_as_Host,
  //       eventsAsGoer: res.data.events_as_goer,
  //       user: res.data.user
  //         })
  //       }
  // });  

    //如何通过reeservation.event_id 取到events
      // let id = this.data.id;
      //如何通过eventID取她reservations? 
      //如何通过user取到她的reservation
      //user.reservations ---->array reeservation.event_id
      //find event by event id

    //   wx.request({
    //     url: `${getApp().globalData.baseUrl}/events/${eventId}/reservations`,
    //     method: 'GET',
    //     success(res) {
    //         console.log(res.data)
    //         page.setData({reservations: res.data.reservations})
    //       }
    // });  

    // },

      // checkingHostOrNot: function(e) {
      //   console.log('checking host or not',e)
      //   // let currentUser = wx.getStorageSync('user')
      //   // let event = e.
      //       // console.log('current user',currentUser)
      //   // if (event.user_id == currentUser.id) {
      //     // this.setData({
      //       // hostOrNot: true
      //     // })
      //   // }
      // },
   
    // goToEventShow(e) {
    //   console.log(e);
    //   let id = e.currentTarget.dataset.id
    //   wx.navigateTo({
    //     url: `../eventdetails/eventdetails?id=${id}`
    //   })
    // },

    // goToEventShow: function(options){
    //   let page =this;
    //   wx.request({
    //     header: wx.getStorageSync('headers'),
    //     url: `${getApp().globalData.baseUrl}/user/${page.data.options.event.id}`,
    //     method:'GET',
    //     success(res) {
    //       const event = res.data;
    //       page.setData(
    //         event
    //       );
    //     }
    //   })
    // },
  
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


    /**
     * 生命周期函数--监听页面加载
     */

    getUserProfile(e) {
        // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
        // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
        wx.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            const userInfo = res.userInfo
            this.setData({
              // userInfo: res.userInfo,
              hasUserInfo: true,
              userInfo:{
                nickName: userInfo.nickName,
                avatarUrl: userInfo.avatarUrl
              }
            })
            console.log('res:',res);
            console.log('userInfo:',userInfo);
          }
        })
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