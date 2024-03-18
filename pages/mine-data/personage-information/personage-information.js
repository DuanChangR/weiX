export default {
	data() {
		return {
			isCompile: false, //为true时当前处于编辑状态
			userData: {}, //用户信息
			birthdayShow: false, //显示日期选择器
			maxDate: Date.now(),
			minDate: new Date().setFullYear(Number(new Date().getFullYear()) - 150),
			birthdayValue: '', //选择的时间
		}
	},
	onLoad() {
		this.userData = this.$getUserData()
	},
	methods: {
		// 点击导航栏右侧
		rightClick() {
			this.isCompile = !this.isCompile
			if (!this.isCompile) {
				this.saveInformation()
			}
		},
		// 提示用户点击编辑
		handleHint() {
			uni.showToast({
				title: '请在编辑状态下编辑',
				icon: 'none'
			})
		},
		// 点击更换头像
		clickUserImg() {
			if (!this.isCompile) {
				this.handleHint()
				return;
			}
			uni.chooseImage({
				count: 1, //默认9
				sizeType: 'original', //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album'], //从相册选择
				success: (res) => {
					this.userData.userImage = res.tempFilePaths[0]
				}
			});
		},
		//修改出生日期
		setBirthday(value) {
			let data = value.value
			if (typeof data == 'number') {
				this.userData.birthday = this.timestampToTime(data)
				this.birthdayShow = false
			}
		},
		// 提交
		saveInformation() {
			console.log(this.userData)
			uni.uploadFile({
				url: this.$BASRUL + '/saveInformation', //仅为示例，非真实的接口地址
				filePath: this.userData.userImage,
				name: 'file',
				formData: {
					guid: this.userData.guid,
					name: this.userData.name,
					birthday: this.userData.birthday,
				},
				success: (uploadFileRes) => {
					let res = JSON.parse(uploadFileRes.data)
					if (res.code == 200) {
						let data = res.data
						this.userData = data
						uni.setStorageSync('userData', JSON.stringify(JSON.parse(uploadFileRes.data).data))
						uni.showToast({
							title: '保存成功'
						})
					} else {
						uni.showToast({
							title: '保存失败',
							icon: 'error'
						})
					}

				}
			});
		},
		//将时间戳格式化
		timestampToTime(timestamp) {
			var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
			var Y = date.getFullYear() + '-';
			var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
			var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
			return Y + M + D;
		}
	}
}