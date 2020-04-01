<template>
    <div>
        <label>
            Age:
            <input type="number" v-model="age" v-on:input="updateAge($event.target.value)">
        </label>
        <label>
            Height:
            <input type="number" v-model="height" v-on:input="updateHeight($event.target.value)">
        </label>
    </div>

</template>

<script>
import { ref } from 'vue'
export default {
    setup(props){
        const updateAge = props['onUpdate:age']
        const updateHeight = props['onUpdate:height']
        return { ...props, updateAge, updateHeight }
    }
}
</script>