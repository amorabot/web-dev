<template>
    <div  class="pointer">
        <!-- <img src="@/assets/svgs/arrow-icon.svg" > -->
		<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"/></svg>
    </div>
</template>

<style scoped>
@keyframes float {
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
}
.pointer {
	width: 70px;
	height: 70px;
	box-sizing: border-box;
	border-radius: 50%;
	overflow: hidden;
	transform: translatey(0px);
	animation: float 6s ease-in-out infinite;
	img { width: 100%; height: auto; }
}
</style>