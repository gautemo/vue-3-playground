<template>
    <div class="cont">
        <section class="top">
            <h1>Chat</h1>
            <div id="display">
                <p class="time">{{time}}</p>
            </div>
        </section>
        <section class="main">
            <VideoRoom/>
        </section>
    </div>
</template>

<script>
import VideoRoom from '@/components/VideoRoom'
import { ref } from 'vue'

export default {
    components: {VideoRoom},
    setup(){
        const time = ref('');

        setInterval(() => {
            time.value = new Intl.DateTimeFormat('default', {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }).format(new Date())
        }, 1000);

        return {time}
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

.time{
    font-size: 2em;
    text-align: center;
}

#display{
    position: relative;
    background: white;
    border-radius: 5px;
    border: 3px solid black;
    height: 80px;
    width: 160px;
}
</style>