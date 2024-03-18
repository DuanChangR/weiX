export default {
	data() {
		return {
			userName: '', //账号
			passWord: '', //密码
		};
	},
	methods: {
		login() {
			uni.showLoading({
				title: '登录中'
			})
			this.$request({
				url: '/login',
				data: {
					userName: this.userName,
					passWord: this.passWord
				},
				success: (res) => {
					if (res.code == 200) {
						uni.setStorageSync('userData', JSON.stringify(res.data))
						uni.hideLoading()
						uni.reLaunch({
							url: '/pages/index/index'
						})
					} else {
						uni.hideLoading()
						uni.showToast({
							title: res.msg,
							icon: 'error'
						})
					}
				}
			})
		}
	}
}