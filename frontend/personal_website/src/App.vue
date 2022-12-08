<template>
  <MusicPlayer/>
  <router-view/>
</template>

<script>
  import MusicPlayer from '@/components/MusicPlayer';
  export default {
    name: 'App',
    components: {
      MusicPlayer
    }
  }
</script>