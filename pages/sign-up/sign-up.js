// pages/sign-up/sign-up.js
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

  bindSubmit: function (e) {
    console.log('=====24===', e);
    let page = this
    let phoneNumber = e.detail.value.phoneNumber
    let seat = e.detail.value.seats
    let reservation = {
      phonenumber: phoneNumber,
      seat: seat
    }
    console.log('=====reservation====', reservation);

    page.setData(
      {
        modalHidden: false,
      }
    );

    wx.request({
      header: wx.getStorageSync('headers'),
      url: `${getApp().globalData.baseUrl}/events/${data.id}/reservations`,
      method: 'POST',
      data: reservation,
      success() {
        wx.redirectTo({
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

    modalChange: function(e) {
      this.setData({
        modalHidden: true
      })
      console.log(e);

      wx.request({
        header: wx.getStorageSync('headers'),
        url: `${getApp().globalData.baseUrl}/events/${data.id}/reservations`,
        method: 'POST',
        data: reservation,
        success() {
          wx.redirectTo({
            url: '/pages/main/main',
          });
        }
      });
    },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function () {
    const page = this
    wx.request({
      header: wx.getStorageSync('headers'),
      url: `${getApp().globalData.baseUrl}/events/${data.id}`,
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