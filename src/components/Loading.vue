<template>
  <div class="lds-dual-ring"></div>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: 'Loading'
})
</script>

<style scoped>
.lds-dual-ring {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  margin-top: 10vh;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 120px;
  height: 120px;
  margin: 8px;
  border-radius: 50%;
  border: 20px solid #101e38;
  border-color: #101e38 transparent #101e38 transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>