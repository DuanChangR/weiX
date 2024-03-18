<template>
	<view class="area">
		<header-title title="消息"></header-title>

		<view class="content">
			<view class="content-item" v-for="n in 15">
				<view class="item-left">
					<image src="@/static/logo.png" mode="aspectFill"></image>
					<view>
						<view>名称</view>
						<view>文字文字文字文字文字文字文字文字文字</view>
					</view>
				</view>
				<view class="item-right">
					<view>18:00</view>
					<image src="@/static/logo.png" mode="aspectFill"></image>
				</view>
			</view>
		</view>

		<tabBar value="0"></tabBar>
	</view>
</template>

<script>
	import js from './index.js'
	export default js
</script>

<style lang="scss" scoped>
	@import './index.scss'
</style>