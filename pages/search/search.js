// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goSearch: function (e) {
    console.log(e);
    const value = e.detail.value;
    console.log(value);
    const page = this;
    wx.request({
      // header: wx.getStorageSync('headers'),
      url: `${getApp().globalData.baseUrl}/events/search?query=${value}`, 
      method: "GET",
      success(res) {
        console.log(res);
        const events = res.data.events;
        page.setData ({
          events: events
        })
      }
    })
  },

  bindViewTap(e) {
    console.log(e);
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `../eventdetails/eventdetails?id=${id}`
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //   const page = this
  //   console.log('headers:', wx.getStorageSync('headers'));
  //   const headers = wx.getStorageSync('headers')
  //   if (headers){
  //     this.getEvents()
  //   }
  //   else {
  //     // wx.event.on('headersready', this, this.getEvents)
  //   }
  // },
  // getEvents: function(){
    
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