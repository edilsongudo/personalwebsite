<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  setup() {
    document.fonts.ready.then(() => {
      document.querySelector(".preloading").style.display = "none";
      AOS.init();
    });
  },
};
</script>

<template>
  <div class="preloading">
    <div class="lds-heart"><div></div></div>
  </div>
</template>

<style>
.preloading {
  background: var(--bgcolor1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lds-heart {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
}
.lds-heart div {
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: rgba(147, 237, 199, 1);
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
}
.lds-heart div:after,
.lds-heart div:before {
  content: " ";
  position: absolute;
  display: block;
  width: 32px;
  height: 32px;
  background: rgba(147, 237, 199, 1);
}
.lds-heart div:before {
  left: -24px;
  border-radius: 50% 0 0 50%;
}
.lds-heart div:after {
  top: -24px;
  border-radius: 50% 50% 0 0;
}
@keyframes lds-heart {
  0% {
    transform: scale(0.95);
  }
  5% {
    transform: scale(1.1);
  }
  39% {
    transform: scale(0.85);
  }
  45% {
    transform: scale(1);
  }
  60% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.9);
  }
}
</style>
