//index.js
const app = getApp()

Page({
  data: {
  },
  ToMusic:function(e){
  console.log("tomusic")
  wx.navigateTo({
    url: '../music/music'
  })
    
  },
  ToScience:function () {
    wx.navigateTo({
      url: '../science/science'
    })
  },
  ToMovie:function(){
    wx.navigateTo({
      url: '../movie/movie',
    })
  }
})
