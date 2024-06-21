import { postList } from "../../data/data.js"
console.log(postList)

Page({
  data: {},
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
