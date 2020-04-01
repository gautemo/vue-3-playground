<template>
    <div class="cont">
        <section class="top">
            <h1>Chat</h1>
            <div id="display">
            </div>
        </section>
        <section class="main" v-if="mounted">
            <VideoRoom/>
        </section>
    </div>
</template>

<script>
import VideoRoom from '@/components/VideoRoom'
import { ref, onMounted } from 'vue'

export default {
    components: {VideoRoom},
    setup(){
        const mounted = ref(false);
        onMounted(() => mounted.value = true)
        return {mounted}
    }
}
</script>

<style scoped>
.cont{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.main{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.top{
    background: linear-gradient( 135deg, #28C76F 10%, #81FBB8 100% );
    padding: 5px;
    display: flex;
    height: 140px;
    align-items: center;
}
h1{
    flex: 1;
}
</style>