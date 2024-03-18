<template>
	<view class="area">
		<header-title title="联系"></header-title>

		<view class="content">
			<u-index-list :index-list="indexList" inactiveColor="white">
				<template v-for="(item, index) in itemArr">
					<!-- #ifdef APP-NVUE -->
					<u-index-anchor bgColor="#000000" color="black" :text="indexList[index]"></u-index-anchor>
					<!-- #endif -->
					<u-index-item>
						<!-- #ifndef APP-NVUE -->
						<u-index-anchor size="18" bgColor="#919191" color="black"
							:text="indexList[index]"></u-index-anchor>
						<!-- #endif -->
						<view class="list-cell" v-for="(cell, index) in item">
							<image :src="cell.img"></image>
							<view>
								{{cell.name}}
							</view>
						</view>
					</u-index-item>
				</template>
			</u-index-list>
		</view>

		<tabBar value="1"></tabBar>
	</view>
</template>

<script>
	import js from "./relation.js"
	export default js
</script>

<style lang="scss" scoped>
	@import './relation.scss'
</style>