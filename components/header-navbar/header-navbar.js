export default {
	name: "header-navbar",
	props: {
		// 标题
		title: String,
		// 左边的图标
		leftIcon: {
			type: String,
			default: uni.$u.props.navbar.leftIcon
		},
		// 右边的提示文字
		rightText: {
			type: String,
			default: uni.$u.props.navbar.rightText
		},
		// 点击左侧区域(返回图标)，是否自动返回上一页
		autoBack: {
			type: Boolean,
			default: uni.$u.props.navbar.autoBack
		},
	},
	data() {
		return {

		};
	},
	methods: {
		leftClick() {
			if (this.leftIcon) {
				return
			} else {
				uni.navigateBack({
					delta: 1
				})
			}
		},
		// 点击右侧区域
		rightClick() {
			this.$emit('rightClick')
		},
	}
}