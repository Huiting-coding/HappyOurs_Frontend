// pages/main/main.js
Page({

  properties: {
    placeholder: {
      type: String,
      value: '',
    }
  },

  bindTap(e) {
    console.log(e);
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../eventdetails/eventdetails?id=${id}`
    })
  },
 
  /**
   * Page initial data
   */
  data: {
    msg: "whiskey",
    msg1: "beer",
    msg2: "martini",
    events:[],
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

  bindViewTap(e) {
    console.log(e);
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../eventdetails/eventdetails?id=${id}`
    })
  },

  // bindTap() {
  //   wx.navigateTo({
  //     url: '../sign-up/sign-up'
  //   })
  // },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this
    console.log('headers:', wx.getStorageSync('header'));
    const header = wx.getStorageSync('header')
    const auth = wx.getStorageSync('auth')

    wx.request({
      url: `${getApp().globalData.baseUrl}/events`, 
      data: {
        x: '',
        and: '' },
      header: header,
      method: "GET",
      success(res) {
        console.log(res.data);
        const upcoming_events = res.data.upcoming_events;
        const popular_events = res.data.popular_events;
  
        console.log(upcoming_events);
        page.setData ({
          upcoming_events: upcoming_events,
          popular_events: popular_events
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