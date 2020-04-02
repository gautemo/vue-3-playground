<template>
    <div>
        {{likes}}👍
        <button @click="likes++">Like</button>
        <button @click="superLike">🖖✌👌🤙</button>
    </div>
</template>

<script>
import { getLikes } from '@/likesOwn';
export default {
    setup(){
        return { ...getLikes() }
    }
}
</script>