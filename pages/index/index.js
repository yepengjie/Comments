//index.js
//获取应用实例
const app = getApp()

Page({
    onShareAppMessage () {
        return {
            title: 'swiper',
            path: 'page/component/pages/swiper/swiper'
        }
    },
    data: {
        background: ['/images/bg_img1.jpg', '/images/bg_img2.jpg', '/images/bg_img3.jpg'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500,
        inputShowed: false,
        inputVal: ""
    },
    onLoad: function () {
        this.setData({
            search: this.search.bind(this)
        })
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    // 查询
    search: function (value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve([{text: '搜索结果', value: 1}, {text: '搜索结果2', value: 2}])
            }, 200)
        })
    },
    selectResult: function (e) {
        console.log('select result', e.detail)
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})
