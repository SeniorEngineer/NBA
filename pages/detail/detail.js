// pages/detail/detail.js 
let datas = require('../../datas/list-data.js')
Page({
  /** 
  * 页面的初始数据 
  */
  data: {
    detailobj: {},
    isshow: false,
    index: null
  },
  //收藏点击事件 
  ishide() {
    let isshow = !this.data.isshow
    //更新收藏状态 
    this.setData({
      isshow
    })
    //提示用户 
    let title = isshow ? '收藏成功' : '取消收藏'
    wx.showToast({
      title,
      icon: 'success'
    })
    //收藏状态存储到本地 
    wx.getStorage({
      key: 'isshow',
      success: (res) => {
        // console.log(res) 
        let index = this.data.index
        let obj = res.data
        obj[index] = isshow
        wx.setStorage({
          key: 'isshow',
          data: obj,
          success: () => {
            // console.log(obj) 
          }
        })
      },
    })
  },
  /** 
   * 生命周期函数--监听页面加载 
   */
  onLoad: function (options) {
    //或取下标，通过下标跳转到相对应的详情页 
    let index = options.index
    this.setData({
      detailobj: datas.list_data[index],
      index: index
    })
    //根据本地缓存的数据判断用户是否收藏当前的文章 
    let detailStorage = wx.getStorageSync('isshow');
    //如果没有数据，在缓存中初始化空对象 
    if (!detailStorage) {
      wx.setStorageSync('isshow', {})
    }
    //判断用户是否收藏 
    if (detailStorage[index]) {
      this.setData({
        isshow: true
      })
    }
  } 
})