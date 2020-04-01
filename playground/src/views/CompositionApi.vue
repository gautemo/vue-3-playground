<template>
    <div>
        <p>Count 1: {{counter}}</p>
        <p>Count 2: {{state.count}}</p>
        <p>Added: {{added}}</p>
        <button @click="up">Up Count 1</button>
        <button @click="upState">Up Count 2</button>
    </div>
</template>

<script>
import { ref, reactive, computed, watchEffect, watch, onMounted, onUnmounted } from 'vue';

export default {
    setup(){
        const counter = ref(0);

        const state = reactive({
            count: 0
        })

        const up = () => counter.value++;
        const upState = () => state.count++;

        const added = computed(() => counter.value + state.count);

        watch(counter, () => console.log(`this changed to ${counter.value}`))
        watchEffect(() => console.log(`it changed to ${state.count}`))

        onMounted(() => console.log('DOM is ready'))

        onUnmounted(() => console.log('DOM is gone'))

        return { counter, state, up, upState, added }
    }
}
</script>