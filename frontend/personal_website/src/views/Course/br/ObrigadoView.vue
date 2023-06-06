<script>
  import axios from "axios";
  export default {
  mounted() {
    document.querySelector('.music-player-modal').style.display = 'none'
  }
}
</script>

<template>
    <div class="container">
        <div>
            <h1>Falta apenas 1 passo para concluir seu cadastro.</h1>
            <div class="progress">
                <div class="progress-bar" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
            </div>
            <p>Quase lá! O Ebook foi enviado para seu email :)</p>
                    <br>
            <p>Porém, para completar o seu cadastro, entre no GRUPO DO WHATSAPP do LIBERDADE FREELANCER para obter atualizações e mais conteúdos gratuitos.</p>
            <a href="https://chat.whatsapp.com/DAmwDgmy4tVK3ZgDthmiP9" class="button-56"> <i class="fab fa-whatsapp"></i>ENTRAR NO GRUPO EXCLUSIVO </a>
        </div>
    </div>
</template>

<style scoped>
.container {
    margin-top: 5vh;
}

.progress {
    margin: 20px auto;
}

h1 {
    font-weight: bold;
    font-family: 'OpenSans', sans-serif;
    font-size: 2rem;
    text-transform: uppercase;
}

.button-56 i {
    font-size: 1.5rem;
}

/* CSS */
.button-56 {
  align-items: center;
  background-color: #fee6e3;
  /* border: 2px solid #111; */
  border-radius: 3px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-family: Inter,sans-serif;
  font-size: 20px;
  height: 60px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  margin: 20px auto;
  background: #25D366;
  color: #fff;
  width: 100%;
  max-width: 300px;

}

/* .button-56:after {
  background-color: #F0B924;
  border-radius: 8px;
  content: "";
  display: block;
  height: 48px;
  left: 0;
  width: 100%;
  position: absolute;
  top: -2px;
  transform: translate(8px, 8px);
  transition: transform .2s ease-out;
  z-index: -1;
}

.button-56:hover:after {
  transform: translate(0, 0);
} */

.button-56:active {
  background-color: #ffdeda;
  outline: 0;
}

.button-56:hover {
  outline: 0;
}

@media (min-width: 768px) {
  .button-56 {
    padding: 0 40px;
  }
}
</style>