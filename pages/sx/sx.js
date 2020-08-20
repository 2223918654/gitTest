// pages/sx/sx.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pickAry:[
    {
      index:0,
      title:"人数",
      options:["1-3","3-6","6-10","10-15","15-20"],
      ditu:"../image/rs.png"
    },
    {
      index:0,
      title:"工种",
      options:["搬运工","卸装工","搬家工","跑腿工","清洁工"],
      ditu:"../image/gz.png"
    },
   
  ],
  
  date: '2016-09-01',
  time: '12:01',
  region: ['广东省', '广州市', '海珠区'],
  customItem: '全部'
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindTimeChange: function(e) {//时间选择器
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindDateChange: function(e) {//日期选择器
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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