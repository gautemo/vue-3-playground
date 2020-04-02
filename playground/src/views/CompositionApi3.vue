<template>
    <div>
        <article>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta reprehenderit dignissimos vero eligendi corrupti ratione minus quos saepe iure, molestias delectus magni ad illum. Nihil laudantium nesciunt sapiente repellat at!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate incidunt temporibus quam ullam, tempora error ea beatae, sit quo voluptatem expedita quasi cupiditate odit fugiat commodi! Consequuntur provident accusantium debitis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit fuga labore alias nisi odit ipsam natus eius, quam, iure totam nostrum quod suscipit aut tempora cupiditate aliquam aperiam facilis?
        </article>
        <LikeButtonTwo/>
        <HeartButton/>
    </div>
</template>

<script>
import LikeButtonTwo from '@/components/LikeButtonTwo'
import HeartButton from '@/components/HeartButton'

export default {
    components: { LikeButtonTwo, HeartButton },
}
</script>

<style scoped>
article{
    width: 600px;
}
</style>