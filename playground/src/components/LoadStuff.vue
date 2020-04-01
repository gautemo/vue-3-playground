<template>
    <div>
        <img v-for="m in movies" :src="m.Poster" alt="Movie poster" :key="m.imdbID">
    </div>
</template>

<script>
export default {
    async setup(){
        const response = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman');
        const data = await response.json();
        return { movies: data.Search }
    }
}
</script>

<style scoped>
img{
    height: 150px;
    margin: 5px;
}
</style>