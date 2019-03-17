<template>
  <div class="coverVideo">
    <div class="video overflow-hidden">
      <video autoplay muted loop>
        <source src="@/assets/cover/snow.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.coverVideo {
  height: 100vh;
  width: 100%;
  position: absolute;
}
.video {
  height: 100%;
  width: 100%;
  opacity: 0.6;
  position: relative;
}
.video video {
  left: 50%;
  top: 50%;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
