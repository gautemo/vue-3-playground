<template>
    <div>
        <label>
            Age:
            <input type="number" v-model="age" v-on:input="$attrs['onUpdate:age']($event.target.value)" step="3">
        </label>
        <label>
            Height:
            <input type="number" v-model="height" v-on:input="$attrs['onUpdate:height']($event.target.value)" step="3">
        </label>
    </div>

</template>

<script>
import { ref } from 'vue'
export default {
    props: ['age', 'height'],
    setup(props){
        return { ...props }
    }
}
</script>