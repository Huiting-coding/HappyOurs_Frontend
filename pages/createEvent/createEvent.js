// pages/createEvent/createEvent.js
const app = getApp()
const chooseLocation = requirePlugin('chooseLocation');

Page({
  data:{
    endtime :''
  },
  showLocation: function(e) {
    const page = this;
    wx.chooseLocation({
      location: {
      name:'',
      address:'',
      latitude: 0,
      longitude:0},
      success(res) {
        console.log('res-chooseLocation',res)
        let address = res.address;
        let name = res.name; 
        console.log('res.name-chooseLocation',res.name)
        let latitude = res.latitude;
        let longitude = res.longitude;
        page.setData({ 
            location: {
            name:name, address:address, latitude:latitude, longitude:longitude
            },
        });
      }
    })
  },

  formSubmit: function(e) {
    console.log('e.detail', e.detail)
    const page = this
    // let drink = e.detail.value.drink;
    let name = e.detail.value.title;
    let summary = e.detail.value.summary;
    let date = e.detail.value.date;
    let startTime = e.detail.value.startTime;
    let endTime = e.detail.value.endTime;
    // let begins_at 
    let location = this.data.location;
    let capacity = e.detail.value.capacity;
    let drinkType = e.detail.value.drinkType;
    const upImgs = this.upImgs;
    const uploadedFiles = this.data.uploadedFiles[0].tempFilePath;
    console.log(upImgs);
    console.log(location);
    console.log('location')
    console.log(date)
    // let parseInt(startTime)
    let event = {
      name: name,
      summary: summary,
      location: location.address,
      latitude: location.latitude,
      longitude: location.longitude,
      capacity: capacity,
      drink_type: drinkType,
      date: date,
      startTime: startTime,
      endTime: endTime
    }
    console.log('event',event);
    
    const userId = app.globalData.user.id
    event = {
      ...event,
      userId
    }

    wx.request({
      header: wx.getStorageSync('headers'),
      url:`${getApp().globalData.baseUrl}/events`,
      method: 'POST',
      data: event,
      success(res){
        console.log('res',res)
        const eventId = res.data.id
        wx.uploadFile({
          url: `${app.globalData.baseUrl}/events/${eventId}/new_images`,
          filePath: uploadedFiles,
          name: 'eventsPhoto',
          success(res) {
            console.log("photoupload",res)
        
          }, fail(e){ 
            console.log(e)
          }
        })
        console.log("end")
        wx.redirectTo({
          url: `../eventdetails/eventdetails?id=${eventId}`
        });
      }
    });
  },

        // wx.switchTab({
          // url: '/pages/profile-page/profile-page'
          // url: '/pages/category-modelling/category-modelling'
        // });
  

        
 



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


    /**
     * 页面的初始数据
     */
    data: {
      array:[ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
      drink: ["wine", "whiskey", "martini", "beer", "vodka", "cauldron", "gin", "coffee", "tea", "mixed", "other"]
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
        });
       app.globalData.time = e.detail.value
    },

    bindEndTimeChange: function (e){
      console.log('picker发送选择改变，携带值为', e.detail.value)
      console.log(app.globalData)
      this.setData({
        endtime: e.detail.value
      })
      let endTime = parseInt(e.detail.value);
      let startTime = parseInt(app.globalData.time)
      console.log(endTime)
      console.log(startTime)
      if (endTime <= startTime){
      wx.showModal({
        title: '🕰',
        content: 'Please choose a valid time for your event',
        success (res) {
          if (res.confirm) {
        
             endtime: ''
          
          }
        }
      })
    }
  },

    bindPickerChange: function (e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
          index: e.detail.value
        })
    },
    addPhoto() {
        let page = this;
        wx.chooseMedia({
          count: 1,
          mediaType: ['image','video'],
          sourceType: ['album', 'camera'],
          maxDuration: 30,
          camera: 'back',
          success(res) {
            console.log('res,choose media',res)
            page.setData({ 
             uploadedFiles: res.tempFiles
              })
          }
    })
  },
  //上传服务器
  upImgs(imgurl, id) {
    console.log("update Status")
    wx.uploadFile({
      url: `${app.globalData.baseUrl}/events/${id}/new_images`,
      filePath: imgurl,
      name: 'eventsPhoto',
      success(res) {
        console.log(res.data)
        // wx.showToast({
        //   title: 'uploaded',
        //   icon: 'success'
        // })
      }
    })
  },

  backMain:function () {
    wx.switchTab({
      url: '../main/main',
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
