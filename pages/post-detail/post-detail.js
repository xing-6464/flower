import { postList } from "../../data/data"

Page({
  data: {
    postData: {},
    collected: false,
    _pid: null,
    _postCollected: null,
  },
  onMusic(event) {
    const mgr = wx.getBackgroundAudioManager()
    mgr.src = postList[0].music.url
    mgr.title = postList[0].music.title
  },
  async onCollect(event) {
    // const postsCollected = this.data._postCollected
    // postsCollected[this.data._pid] = !this.data.collected

    // wx.setStorageSync("posts_collected", postsCollected)
    // wx.showToast({
    //   title: this.data.collected ? "取消收藏" : "收藏成功",
    // })
    const result = await wx.showModal({
      title: "是否收藏文件",
    })
    if (result.confirm) {
      const postsCollected = this.data._postCollected
      postsCollected[this.data._pid] = !this.data.collected

      wx.setStorageSync("posts_collected", postsCollected)
      this.setData({
        collected: !this.data.collected,
      })
    }
  },
  async onShare(event) {
    const result = await wx.showActionSheet({
      itemList: ["微信到微信"],
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
