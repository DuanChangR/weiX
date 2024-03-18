<template>
	<view>
		<u-navbar bgColor="black" :title="title" :leftIcon="leftIcon" :rightText="rightText" @leftClick="leftClick"
			@rightClick="rightClick" height="88rpx" titleStyle="font-size:36rpx;color:white;" leftIconColor="white"
			:autoBack="autoBack" placeholder></u-navbar>
	</view>
</template>

<script>
	import js from "./header-navbar.js"
	export default js
</script>

<style lang="scss" scoped>
	@import './header-navbar.scss'
</style>