<template>
	<view class="area">
		<header-navbar title="个人信息" :rightText="isCompile?'保存':'编辑'" @rightClick="rightClick" autoBack></header-navbar>
		<view class="content">
			<view>
				<view>头像</view>
				<image @click="clickUserImg" :src="userData.userImage" mode="aspectFill"></image>
			</view>
			<view>
				<view>
					<view>名称</view>
					<view v-if="!isCompile" @click="handleHint">{{userData.name}}</view>
					<input v-else v-model="userData.name" type="text" placeholder="请输入名称" />
				</view>
				<view>
					<view>出生日期</view>
					<view @click="isCompile?birthdayShow=true:handleHint()">{{userData.birthday}}</view>
				</view>
			</view>
		</view>


		<u-datetime-picker :show="birthdayShow" @close="birthdayShow=false" @confirm="setBirthday"
			@cancel="birthdayShow=false" v-model="Date.now()" mode="date" :minDate="minDate" :maxDate="maxDate"
			closeOnClickOverlay></u-datetime-picker>
	</view>
</template>

<script>
	import js from "./personage-information.js"
	export default js
</script>

<style lang="scss" scoped>
	@import './personage-information.scss'
</style>