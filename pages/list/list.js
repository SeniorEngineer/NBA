// pages/list/list.js
let datas = require('../../datas/list-data.js')
//导入util.js
let util = require('../../utils/util.js')
console.log(datas )
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[],
    images: [
      {url:'/images/nba/5.jpg',index:'0'},
      {url:'/images/nba/6.jpg',index:'1'},
      {url:'/images/nba/7.jpg',index:'2'}
      ],
    timer:"",//定时器名字
    countNum:'60',//定时器初始值
  },
  //轮播图跳转到详情页
  toindex(event){
    console.log(event)
    let index = event.target.dataset.index;
    wx.navigateTo({
      url: `/pages/detail/detail?index=${index}`
    })
  },
  //跳转到详情页
  todetail(event){
    //获取下标
    let index = event.currentTarget.dataset.index;
    wx.navigateTo({
      url: `/pages/detail/detail?index=${index}`
    })
  },
  countDown(){
  //获取倒计时的初始值
  let countNum = this.data.countNum;
  //定时器存在data里面
  this.setData({
    timer:setInterval(()=>{
      countNum--;
      //存进data，让页面实时刷新倒计时
      this.setData({
        countNum: countNum,
      })
      if (countNum === 0){
        clearInterval(this.data.timer);
      }
    },1000)
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 改变页面信息或者刷新后与后台交互获取最新的信息
    this.setData({
      listData:datas.list_data
    })
     // 调用函数时，传入new Date()参数，返回值是日期和时间
    let time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    })
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
    //监听页面时调用
    this.countDown();
  
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