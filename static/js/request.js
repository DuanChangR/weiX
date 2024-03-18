// const basURL = 'http://192.168.0.178:3000'
const basURL = 'http://192.168.55.168:3000'

export default function(data) {
	uni.request({
		url: basURL + data.url,
		method: data.method ? data.method : 'POST',
		data: data.data,
		success: (res) => {
			data.success(res.data)
		}
	})
}