// menu.js，负责视图层的逻辑和数据传递等

// 菜品：荤菜／素菜／套餐
var meats = { "手撕兔": 2.4, "重庆毛血旺": 2.4, "香辣鸭腿": 2.0, "水煮肉片": 2.0, "花生玉米肘": 2.0, "土豆片回锅": 2.0, "花菜培根": 1.6, "三月瓜鸡丁": 1.6, "双椒肉丝": 1.2, "臊子蒸蛋": 0.8, "肉末豇豆": 0.8}
var vegetarian = {"跳水笋尖": 0.4, "芋儿白菜": 0.4}
var pack = ["西芹拌白菜", "茄子肉丁", "旺瓜肉丝", "肉末四季豆", "白油冬瓜", "青椒土豆片"]

var meatsVisible = { "手撕兔": true, "重庆毛血旺": true, "香辣鸭腿": true, "水煮肉片": true, "花生玉米肘": true, "土豆片回锅": true, "花菜培根": true, "三月瓜鸡丁": true, "双椒肉丝": true, "臊子蒸蛋": true, "肉末豇豆": true }
var vegetarianVisible = { "跳水笋尖": true, "芋儿白菜": true }
var packVisible = { "西芹拌白菜": true, "茄子肉丁": true, "旺瓜肉丝": true, "肉末四季豆": true, "白油冬瓜": true, "青椒土豆片": true}
var visible = {}
Object.assign(visible, meatsVisible, vegetarianVisible, packVisible)
var checkMeal = ["手撕兔", "水煮肉片", "芋儿白菜"]

// 小程序内page主体，参见小程序开发文档
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
    meatsCheck: visible
  },

  // 按压星期选择器时触发的动作及其逻辑反馈
  bindDayChange: function (e) {
    this.setData({
      day: this.data.days[e.detail.value]
    })
  },

  bindElementTap: function(e) {
    var id = e.currentTarget.id
    visible[id] = !visible[id]
    this.setData({
      meatsCheck: visible
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