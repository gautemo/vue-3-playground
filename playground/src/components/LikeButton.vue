<template>
    <div>{{likes}}👍<button @click="likes++">Like</button></div>
</template>

<script>
import { likes } from '@/likes';
export default {
    setup(){
        return { likes }
    }
}
</script>