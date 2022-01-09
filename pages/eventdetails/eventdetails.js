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
  onLoad: function () {
    const page = this

    wx.request({
      url: `http://localhost:3000/api/v1/events/1`, 
      data: {},
      method: 'GET',
      success(res) {
        const event = res.data;
        console.log(event);
        page.setData (
          event
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