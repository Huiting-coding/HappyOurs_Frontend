// pages/sign-up/sign-up.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    array:[ 1, 2, 3, 4, 5],
    pickerHidden: true,
    chosen: '',
    modalHidden: true,
    seats: '',
    phoneNumber: '',
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  
  backMain:function () {
    wx.switchTab({
      url: '../main/main',
    })
  },

  bindSubmit: function (e) {
    console.log('=====24===', e.detail.value);
    let page = this
    let reservation = e.detail.value
    console.log('=====reservation====', reservation);

    const userId = app.globalData.user.id
    reservation = {
      ...reservation,
      userId
    }
    wx.request({
      header: wx.getStorageSync('headers'),
      url: `${getApp().globalData.baseUrl}/events/${page.data.event.id}/reservations`,
      method: 'POST',
      data: reservation,
      success() {
        wx.switchTab({
          url: '/pages/main/main',
        });
      }
    });
    },

    formReset: function(e) {
      console.log('form发生了reset事件，携带数据为：', e.detail.value)
      this.setData({
        chosen: ''
      })
    },

    // modalChange: function(e) {
    //   // this.setData({
    //   //   modalHidden: true
    //   // })
    //   console.log(e);

    //   wx.request({
    //     header: wx.getStorageSync('headers'),
    //     url: `${getApp().globalData.baseUrl}/events/${data.id}/reservations`,
    //     method: 'POST',
    //     data: reservation,
    //     success() {
    //       wx.redirectTo({
    //         url: '../confirmation/confirmation',
    //       });
    //     }
    //   });
    // },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    console.log("inside onLoad")
    const page = this
    wx.request({
      header: wx.getStorageSync('headers'),
      url: `${getApp().globalData.baseUrl}/events/${options.id}`,
      success(res) {
        const event = res.data;
        console.log("this is event", event);
        page.setData (
          {event}
        );
        wx.hideToast();
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})