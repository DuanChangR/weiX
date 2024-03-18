<template>
	<u-tabbar :value="value" @change="change" :fixed="false" :placeholder="false" :safeAreaInsetBottom="false" fixed
		placeholder activeColor="white">
		<u-tabbar-item text="消息" icon="chat" @click="click1" name="0"></u-tabbar-item>
		<u-tabbar-item text="通讯" icon="email" @click="click2" name="1"></u-tabbar-item>
		<u-tabbar-item text="发现" icon="bell" @click="click3" name="2"></u-tabbar-item>
		<u-tabbar-item text="我的" icon="account" @click="click4" name="3"></u-tabbar-item>
	</u-tabbar>
</template>

<script>
	import js from './tabBar.js'
	export default js
</script>

<style lang="scss" scoped>
	@import './tabBar.scss'
</style>