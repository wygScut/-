const app = getApp();
Page({
  data:{

  },
  callon:function() {
    wx.makePhoneCall({
      phoneNumber: '01082951332',
    })
  },
  toMovie:function () {
    wx.navigateTo({
      url: '../movie/movie'
    })
  },
  toMusic:function () {
    wx.navigateTo({
      url: '../music/music'
    })
  },
  toScience:function(){
    wx.navigateTo({
      url: '../science/science'
    })
  }
})