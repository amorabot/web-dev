<template>
    <div  class="pointer">
        <img src="@/assets/svgs/arrow-icon.svg" >
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