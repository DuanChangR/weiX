export default {
	data() {
		return {
			indexList: ["A", "B", "C", "D", "E"],
			itemArr: [
				[{
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}],
				[{
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}],
				[{
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}],
				[{
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}],
				[{
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}, {
					name: '张三',
					img: require('@/static/logo.png')
				}]
			]
		}
	},
	onLoad() {
		console.log(getCurrentPages()[getCurrentPages().length - 1].route)
	},
	methods: {

	}
}