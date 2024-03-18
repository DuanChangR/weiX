<template>
	<view class="area">
		<header-title title="我的"></header-title>
		<view class="content">
			<view class="content-header">
				<view>
					<image @click="clickUserImg" :src="userData.userImage" mode="aspectFill">
					</image>
					<view>
						<view>{{userData.name}}</view>
						<view>{{userData.birthday}}</view>
					</view>
				</view>
				<view @click="goBack">退出</view>
			</view>

			<view class="content-content">
				<view v-for="(item,index) in handleList" :key="item.title" @click="seleList(index)">
					<view>
						{{item.title}}
					</view>
					<image src="../../static/images/right.png" mode="heightFix"></image>
				</view>
			</view>
		</view>
		<tabBar value="3"></tabBar>
	</view>
</template>

<script>
	import js from "./mine.js"
	export default js
</script>

<style lang="scss" scoped>
	@import './mine.scss'
</style>