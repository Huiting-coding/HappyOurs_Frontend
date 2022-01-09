// pages/createEvent/createEvent.js
const chooseLocation = requirePlugin('chooseLocation');

Page({
  formSubmit: function(e) {
    console.log(e.detail)
    let title = e.detail.value.title;
    let summary = e.detail.value.summary;
    let date = e.detail.value.date;
    let startTime = e.detail.value.startTime;
    let endTime = e.detail.value.endTime;
    let location = e.detail.value.location;
    let capacity = e.detail.value.capacity;
    console.log(capacity);
    console.log('hiling15')
    let event ={
      title: title,
      summary: summary,
      date: date,
      startTime: startTime,
      endTime: endTime,
      location: location,
      capacity: capacity
    }
    console.log('hello',event);

    wx.request({
      url:`http://localhost:3000/api/v1/events`,
      method: 'POST',
      data: event,
      success(res){
        console.log('res',res)
        wx.redirectTo({
          url:`/pages/main/main`
          // eventdetails/eventdetails?id=${res.currentTarget.id}`
        });
      }
    });


  },
  showLocation: function(e) {
    let page = this;
    wx.chooseLocation({
      // location = {
      // name:'',
      // address:'',
      latitude: 0,
      // longitude:0},
    success(res) {
      console.log('hi',res)
      let name = res.name; 
      console.log('hihi',res.name)
      let address = res.address;
      let latitude = res.latitude;
      let longitude = res.longitude;
        page.setData(
         { location: {
            name:name, address:address, latitude:latitude, longitude:longitude
          },
        }

        );
        // wx.request({
        //   url: `http://localhost:3000/api/v1/events`,
        //   method: 'POST',
        //   data: location,
        //   success() {
        //     // redirect 
        //     wx.redirectTo({
        //       url: '/pages/index/index'
        //     });
        //   }
        // })

  }
})




// const key = 'ILOBZ-HG3L6-2D5SJ-EN2SN-EAZ72-2TBQ4'; //使用在腾讯位置服务申请的key
// const referer = 'HappyOurs'; //调用插件的app的名称
// const location = JSON.stringify({
//   latitude: 31.23347,
//   longitude: 121.43754
// });
// const category = '生活服务,娱乐休闲';
 
// wx.navigateTo({
//   url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&location=' + location + '&category=' + category
// });
},

    /**
     * 页面的初始数据
     */
    data: {
            array:[ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    },

    bindDateChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          date: e.detail.value
        })
      },
    bindTimeChange: function (e){
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          time: e.detail.value
        })
    },

    bindEndTimeChange: function (e){
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        endtime: e.detail.value
      })
  },

    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
    },
    addPhoto() {
        wx.chooseMedia({
          count: 9,
          mediaType: ['image','video'],
          sourceType: ['album', 'camera'],
          maxDuration: 30,
          camera: 'back',
          success(res) {
            console.log(res.tempFiles.tempFilePath)
            console.log(res.tempFiles.size)
          }
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function () {
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
      const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
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
      // 页面卸载时设置插件选点数据为null，防止再次进入页面，geLocation返回的是上次选点结果
      chooseLocation.setLocation(null);
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
