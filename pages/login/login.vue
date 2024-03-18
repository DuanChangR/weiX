<template>
	<view class="area">
		<view class="content">
			<image class="login" src="../../static/logo.png"></image>
			<view class="userLogin">
				<view>
					<view>
						<view>账号:</view>
						<u--input color="white" placeholder="请输入账号" border="surround" v-model="userName"></u--input>
					</view>
					<view>
						<view>密码:</view>
						<u--input type="password" color="white" placeholder="请输入密码" border="surround"
							v-model="passWord"></u--input>
					</view>
				</view>
				<view class="loginBtn" @click="login">登录</view>
			</view>
		</view>
	</view>
</template>

<script>
	import js from './login.js'
	export default js
</script>

<style lang="scss" scoped>
	@import './login.scss'
</style>