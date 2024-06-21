import { postList } from "../../data/data"

Page({
  data: {
    postData: {},
    _pid: null,
    collected: false,
  },
  onCollect(event) {
    const postsCollected = wx.getStorageSync("posts_collected") || {}
    wx.setStorageSync("posts_collected", {
      ...postsCollected,
      [this.data._pid]: true,
    })
    this.setData({
      collected: true,
    })
  },
  onLoad(options) {
    const postData = postList[options.pid]
    this.data._pid = options.pid
    const postsCollected = wx.getStorageSync("posts_collected")
    const collected = postsCollected[this.data._pid] || false

    this.setData({
      postData,
      collected,
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
