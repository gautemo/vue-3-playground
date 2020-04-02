<template>
    <div>
        <p>Count 1: {{counter}}</p>
        <p>Count 2: {{state.count}}</p>
        <p>Added: {{added}}</p>
        <button @click="up">Up Count 1</button>
        <button @click="upState">Up Count 2</button>

        <p>{{fullname}}</p>
        <input type="text" v-model="firstname">
    </div>
</template>

<script>
import { ref, reactive, computed, watchEffect, watch, onMounted, onUnmounted, toRefs } from 'vue';

export default {
    setup(){
        const counter = ref(0);

        const state = reactive({
            count: 0
        })

        const me = reactive({
            firstname: 'Gaute ',
            lastname: 'Meek Olsen',
            age: 28,
            fullname: computed(() => me.firstname + me.lastname)
        })

        const up = () => counter.value++;
        const upState = () => state.count++;

        const added = computed(() => counter.value + state.count);

        watch(counter, () => console.log(`this changed to ${counter.value}`))
        watchEffect(() => console.log(`it changed to ${state.count}`))

        onMounted(() => console.log('DOM is ready'))

        onUnmounted(() => console.log('DOM is gone'))

        return { counter, state, up, upState, added, ...toRefs(me) }
    }
}
</script>