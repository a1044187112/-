const config = require('../config')
var md5 = require('md5')

var getData = function (options, callback) {
  wx.showLoading({
    title: '请稍等',
    mask: true
  })

  var rand = Math.random().toString(36).substr(2)
  var sign = md5.hex_md5(rand + config.api_secret)
  var url = config.api_url + options.name
  var data = options.data
  data.rand = rand
  data.sign = sign

  wx.request({
    url: url,
    data: data,
    header: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    success: function (res) {
      // 隐藏导航栏加载框
      wx.hideNavigationBarLoading();
      // 停止下拉动作
      wx.stopPullDownRefresh();
      
      callback(res.data)
    },
    fail: function (res) {
      wx.showModal({
        title: '接口出错',
        content: '请关闭程序后重新进入',
        showCancel: false
      })
    },
    complete: function (res) {
      wx.hideLoading()
    }
  })
}

module.exports = {
  getData: getData,
}