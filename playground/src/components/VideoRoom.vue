<template>
    <div>
        <button @click="calling = !calling">Call my friend</button>
        <Teleport to="#display">
            <div class="alert" v-if="calling"><h2>Call</h2> <span class="bell fa fa-bell"></span></div>
        </Teleport>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const calling = ref(false);
        return {calling}
    }
}
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css);

.alert{
    padding: 0 20px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: red;
}

h2{
    display: inline-block;
}

.bell{
  width: 40px;
  height: 40px;
  font-size: 40px;
  color: #ffffff;
  animation: ring 4s .2s ease-in-out infinite;
  transform-origin: 50% 4px;
}

@keyframes ring {
  0% { transform: rotate(0); }
  1% { transform: rotate(30deg); }
  3% { transform: rotate(-28deg); }
  5% { transform: rotate(34deg); }
  7% { transform: rotate(-32deg); }
  9% { transform: rotate(30deg); }
  11% { transform: rotate(-28deg); }
  13% { transform: rotate(26deg); }
  15% { transform: rotate(-24deg); }
  17% { transform: rotate(22deg); }
  19% { transform: rotate(-20deg); }
  21% { transform: rotate(18deg); }
  23% { transform: rotate(-16deg); }
  25% { transform: rotate(14deg); }
  27% { transform: rotate(-12deg); }
  29% { transform: rotate(10deg); }
  31% { transform: rotate(-8deg); }
  33% { transform: rotate(6deg); }
  35% { transform: rotate(-4deg); }
  37% { transform: rotate(2deg); }
  39% { transform: rotate(-1deg); }
  41% { transform: rotate(1deg); }

  43% { transform: rotate(0); }

  44% { transform: rotate(30deg); }
  46% { transform: rotate(-28deg); }
  48% { transform: rotate(34deg); }
  49% { transform: rotate(-32deg); }
  51% { transform: rotate(30deg); }
  53% { transform: rotate(-28deg); }
  55% { transform: rotate(26deg); }
  57% { transform: rotate(-24deg); }
  59% { transform: rotate(22deg); }
  61% { transform: rotate(-20deg); }
  63% { transform: rotate(18deg); }
  65% { transform: rotate(-16deg); }
  67% { transform: rotate(14deg); }
  69% { transform: rotate(-12deg); }
  71% { transform: rotate(10deg); }
  73% { transform: rotate(-8deg); }
  75% { transform: rotate(6deg); }
  77% { transform: rotate(-4deg); }
  79% { transform: rotate(2deg); }
  81% { transform: rotate(-1deg); }
  83% { transform: rotate(1deg); }

  100% { transform: rotate(0); }
}
</style>