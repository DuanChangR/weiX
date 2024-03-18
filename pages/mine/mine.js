export default {
	data() {
		return {
			userData: {},
			handleList: [{
				title: '修改个人信息',
				router: '/pages/mine-data/personage-information/personage-information'
			}, {
				title: '关于',
				router: '/pages/mine-data/personage-information/personage-information'
			}]
		};
	},
	onLoad() {
		this.userData = JSON.parse(uni.getStorageSync('userData'))
	},
	methods: {
		// 退出登录
		goBack() {
			uni.reLaunch({
				url: '/pages/login/login'
			})
			uni.removeStorageSync('userData')
		},
		// 点击更换头像
		clickUserImg() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: 'original', //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: (res) => {

					uni.uploadFile({
						url: this.$BASRUL + '/upload', //仅为示例，非真实的接口地址
						filePath: res.tempFilePaths[0],
						name: 'file',
						formData: {
							'guid': this.userData.guid
						},
						success: (uploadFileRes) => {
							let userImage = JSON.parse(uploadFileRes.data).accessUrl
							this.userData.userImage = userImage
							uni.setStorageSync('userData', JSON.stringify(this.userData))
						}
					});
				}
			});
		},
		// 点击操作列表
		seleList(index) {
			console.log(this.handleList[index].router)
			uni.navigateTo({
				url: this.handleList[index].router,
			});
		}
	}
}