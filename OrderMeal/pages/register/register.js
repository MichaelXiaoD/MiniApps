Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['493主控室', '493机械组', '493电气组', '三废室'],
    objectArray: [
      {
        id: 0,
        name: '493主控室'
      },
      {
        id: 1,
        name: '493机械组'
      },
      {
        id: 2,
        name: '493电气组西'
      },
      {
        id: 3,
        name: '三废室'
      }
    ],
    index: 0,
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
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