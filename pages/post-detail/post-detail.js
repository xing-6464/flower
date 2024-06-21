import { postList } from "../../data/data"

Page({
  data: {
    postData: {},
    _pid: null,
  },
  onCollect(event) {
    wx.setStorageSync("posts_collected", {
      [this.data.pid]: true,
    })
  },
  onLoad(options) {
    const postData = postList[options.pid]
    this.data._pid = options.pid
    this.setData({
      postData,
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
