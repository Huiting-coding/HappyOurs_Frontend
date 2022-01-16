// pages/eventdetails/eventdetails.js
Page({

  /**
   * Page initial data
   */
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0

  },

  changeProperty: function (e) {
    var propertyName = e.currentTarget.dataset.propertyName
    var newData = {}
    newData[propertyName] = e.detail.value
    this.setData(newData)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (data) {
    console.log(data);
    const page = this

    wx.request({
      header: wx.getStorageSync('headers'),
      url: `${getApp().globalData.baseUrl}/events/${data.id}`,
      data: {},

      method: 'GET',
      success(res) {
        console.log("===res====", res);
        const event = res.data;
        console.log(event);
        page.setData ({
          event: event
        });
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
