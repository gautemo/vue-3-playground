<template>
    <div>
        <button @click="show = !show">What will happen?</button>
        <transition name="fade">
            <img v-if="show" src="https://image.freepik.com/free-vector/halloween-ghost-cartoon_71328-356.jpg" alt="ghosts">
        </transition>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup(){
        const show = ref(false);
        return {show}
    }
}
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 2.0s;
}
.fade-enter-from{
  opacity: 0;
}
.fade-enter-to{
  opacity: 0.5;
}

.fade-leave-active{
  transition: all 2s;
}

.fade-leave-to{
  transform: translateX(1500px);
  opacity: 0.2;
}


div{
    width: 700px;
    margin-top: 50px;
    height: 100%;
    flex-direction: column;
    display: flex;
}
</style>