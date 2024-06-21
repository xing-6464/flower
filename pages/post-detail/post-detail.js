import { postList } from "../../data/data"

Page({
  data: {
    postData: {},
    collected: false,
    _pid: null,
    _postCollected: null,
  },
  onCollect(event) {
    const postsCollected = this.data._postCollected
    postsCollected[this.data._pid] = !this.data.collected
    wx.setStorageSync("posts_collected", postsCollected)
    this.setData({
      collected: !this.data.collected,
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
      _postCollected: postsCollected || {},
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
