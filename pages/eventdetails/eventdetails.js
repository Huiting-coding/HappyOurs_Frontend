// pages/eventdetails/eventdetails.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (data) {
    console.log(data);
    const page = this

    const headers = wx.getStorageSync('headers')
    wx.request({
      header: wx.getStorageSync('headers'),
      url: `${getApp().globalData.baseUrl}/events/${data.id}`,
      data: {
        userInfo: result.userInfo
      },

      method: 'GET',
      success(res) {
        console.log("===res====", res);
        const event = res.data;
        console.log(event);
        page.setData (
          event.currentUser
        );
        wx.hideToast();
      }
    })
  },

  bindViewTap() {
    wx.navigateTo({
      url: '../main/main'
    })
  },

  bindTap(e) {
    console.log(e);
    let eventId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../sign-up/sign-up?id=${eventId}`
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
