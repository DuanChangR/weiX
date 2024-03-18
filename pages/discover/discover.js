export default {
	data() {
		return {

		};
	},
	onLoad() {
		console.log(getCurrentPages()[getCurrentPages().length - 1].route)
	}
}