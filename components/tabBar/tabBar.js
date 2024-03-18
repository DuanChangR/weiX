export default {
	props: {
		value: String,
	},
	data() {
		return {

		}
	},
	methods: {
		change() {
			getCurrentPages()[getCurrentPages().length - 1].route
		},
		// 获取当前路由
		getRouter() {
			return getCurrentPages()[getCurrentPages().length - 1].route
		},
		click1() {
			if (this.getRouter() != 'pages/index/index') {
				uni.reLaunch({
					url: '/pages/index/index'
				})
			}
		},
		click2() {
			if (this.getRouter() != 'pages/relation/relation') {
				uni.reLaunch({
					url: '/pages/relation/relation'
				})
			}
		},
		click3() {
			if (this.getRouter() != 'pages/discover/discover') {
				uni.reLaunch({
					url: '/pages/discover/discover'
				})
			}
		},
		click4() {
			if (this.getRouter() != 'pages/mine/mine') {
				uni.reLaunch({
					url: '/pages/mine/mine'
				})
			}
		},
	}
}