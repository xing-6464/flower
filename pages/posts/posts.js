import { postList } from "../../data/data.js"
console.log(postList)

Page({
  data: {},
  onGoToDetail(event) {
    console.log(event)
    wx.navigateTo({
      url: "/pages/post-detail/post-detail",
    })
  },
  onGoToUser(event) {
    console.log("onGoToUser")
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
