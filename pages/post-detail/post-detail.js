import { postList } from "../../data/data"

Page({
  data: {
    postData: {},
  },
  onLoad(options) {
    const postData = postList[options.pid]
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
