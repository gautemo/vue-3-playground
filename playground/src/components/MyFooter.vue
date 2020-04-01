<template>
    <footer>
        <div class="content">
            <p class="me">
                <span class="createdby">Created by: Gaute Meek Olsen</span>
                <Twitter />    
                <GitHub />
                <Portofolio size="20" />
            </p>
        </div>
    </footer>
</template>

<script>
import Twitter from './icons/Twitter';
import GitHub from './icons/GitHub';
import Portofolio from './icons/Portofolio';

export default {
  components: {
    Twitter,
    GitHub,
    Portofolio,
  }
}
</script>

<style scoped>
footer{
    background: #41b883;
    padding: 0 25px;
}

.content{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}

.me{
    flex: 1;
    display: flex;
    align-items: center;
    height: 30px;
    white-space: nowrap;
}
.createdby{
    margin-right: 5px;
}

a{
    color: inherit;
}

@media only screen and (max-width: 800px) {
    p{
        margin: 3px;
    }
}
</style>