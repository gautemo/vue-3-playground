import { ref } from "vue"

const getLikes = () => {
    const likes = ref(0)
    const superLike = () => likes.value += 1000;
    return {likes, superLike}
}

export {getLikes}