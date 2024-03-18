export function getUserData() {
	return uni.getStorageSync('userData') ? JSON.parse(uni.getStorageSync('userData')) : ''
}