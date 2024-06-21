import { postList } from "../../data/data.js"
console.log(postList)

Page({
  data: {},
  onGoToDetail(event) {
    const pid = event.currentTarget.dataset.postId
    wx.navigateTo({
      url: `/pages/post-detail/post-detail?pid=${pid}`,
    })
  },
  onGoToUser(event) {
    console.log("onGoToUser")
  },
  onLoad(options) {
    wx.setStorageSync("flag", true)
    wx.setStorageSync("name", "92549")
    // wx.clearStorageSync()
    // wx.removeStorageSync('name')
    const flag = wx.getStorageSync("flag")
    console.log(flag)

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
