<template>
<Suspense>
  <template #default>
    <LoadStuff />
  </template>
  <template #fallback>
    <div>Loading...</div>
  </template>
</Suspense>
</template>

<script>
import LoadStuff from '@/components/LoadStuff'
export default {
    components: {LoadStuff}
}
</script>