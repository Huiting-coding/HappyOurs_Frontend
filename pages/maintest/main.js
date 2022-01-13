// pages/maintest/main.js
Page({

  bindTap() {
    wx.navigateTo({
      url: '../eventdetails/eventdetails'
    })
  },
 
  /**
   * Page initial data
   */
  data: {

  },

  bindViewTap(e) {
    console.log(e);
    wx.navigateTo({
      url: '../eventdetails/eventdetails'
    })
  },

  bindTap() {
    wx.navigateTo({
      url: '../sign-up/sign-up'
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    wx.request({
      url: `${getApp().globalData.baseUrl}/events`, 
      method: "GET",
      success(res) {
        const events = res.data.events;
        console.log(events);
        page.setData ({
          events: events
        })
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