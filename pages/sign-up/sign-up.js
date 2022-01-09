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
    const page = this
    const value =  e.detail.value;
    console.log(value);
    const phonenumber = value.phoneNumber
    console.log(phonenumber);
    const reservation = {
      phonenumber: phonenumber
    }
    // const seats = value.seats
    // console.log(seats);
    page.setData(
      {
        modalHidden: false,
        // seats: seats
        // phoneNumber: phonenumber
      }
    );

    console.log('form发生了submit事件，携带数据为：', value)
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
  onLoad: function (options) {
    const page = this

    wx.request({
      url: `${getApp().globalData.baseUrl}/events/1`,
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