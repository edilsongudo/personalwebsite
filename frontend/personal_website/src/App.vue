<template>
  <div>
    <MusicPlayer />
    <router-view />
  </div>
</template>

<script>
import MusicPlayer from "@/components/MusicPlayer";
export default {
  name: "App",
  components: {
    MusicPlayer,
  },
};
</script>
