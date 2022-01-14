// pages/main/main.js
Page({

  properties: {
    placeholder: {
      type: String,
      value: '',
    }
  },

  bindTap() {
    wx.navigateTo({
      url: '../eventdetails/eventdetails'
    })
  },
 
  /**
   * Page initial data
   */
  data: {
    msg: "gin",

  },
  upper(e) {
    console.log(e)
  },

  lower(e) {
    console.log(e)
  },

  scroll(e) {
    console.log(e)
  },

  scrollToTop() {
    this.setAction({
      scrollTop: 0
    })
  },

  tap() {
    for (let i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },

  tapMove() {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  bindViewTap() {
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
// headers not being used - removed
      method: "GET",
      success(res) {
        const events = res.data.events;
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

  },

  methods: {
    // 用户输入触发
    handleInput: function(e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    // 点击清空输入框icon
    handleDeleteClick: function() {
      this.setData({
        inputValue: ''
      })
    },
    // 点击取消触发
    handleTextbtnClick() {
      // 触发父组件中的方法
      this.setData({
        inputValue: ''
      })
    },
    // 用户点击确定触发
    handleConfirm() {
      this.triggerEvent('handleSearch', this.data.inputValue)
    }
  }
})