// menu.js

var meats = { "手撕兔": 2.4, "重庆毛血旺": 2.4, "香辣鸭腿": 2.0, "水煮肉片": 2.0, "花生玉米肘": 2.0, "土豆片回锅": 2.0, "花菜培根": 1.6, "三月瓜鸡丁": 1.6, "双椒肉丝": 1.2, "臊子蒸蛋": 0.8, "肉末豇豆": 0.8}
var vegetarian = {"跳水笋尖": 0.4, "芋儿白菜": 0.4}
var pack = ["西芹拌白菜", "茄子肉丁", "旺瓜肉丝", "肉末四季豆", "白油冬瓜", "青椒土豆片"]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    meatMenu: meats,
    vegetarianMenu: vegetarian,
    packMenu: pack,
    days:["周一", "周二", "周三", "周四", "周五"],
    day: "周一",
  },

  bindDayChange: function (e) {
    this.setData({
      day: this.data.days[e.detail.value]
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