import { postList } from "../../data/data.js"
console.log(postList)

Page({
  data: {},
  onGoToDetail(event) {
    wx.navigateTo({
      url: "/pages/post-detail/post-detail",
    })
  },
  onLoad(options) {
    this.setData({
      postList,
    })
  },
  onReady() {},
  onShow() {},
  onHide() {},
  onUnload() {},
  onShareAppMessage() {
    return {
      title: "",
    }
  },
})
