<template>
  <div class="relative w-full overflow-hidden">
    <slot name="img" class="block object-cover" />
    <div class="overlay">
      <slot name="text" />
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}
</style>
