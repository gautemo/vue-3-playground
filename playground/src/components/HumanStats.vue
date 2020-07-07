<template>
    <div>
        <label>
            Age:
            <input type="number" v-model="age" @input="$emit('update:age', $event.target.value)" step="3">
        </label>
        <label>
            Height:
            <input type="number" v-model="height" @input="$emit('update:height', $event.target.value)" step="3">
        </label>
    </div>

</template>

<script>
import { ref } from 'vue'
export default {
    props: {
        'age': Number, 
        'height': Number,
    },
    setup({age, height}){
        return { age, height }
    }
}
</script>