<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/fragment">Fragment</router-link> |
        <router-link to="/suspense">Suspense</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
    <MyFooter/>
  </div>
</template>

<script>
import MyFooter from '@/components/MyFooter'
export default {
  components: {MyFooter}
}
</script>

<style>
body{
  margin: 0;
}
#app{
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
