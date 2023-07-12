<script>
  import axios from "axios";
  export default {
  data() {
    return {
      name: '',
      email: '',
      infoFilled: false,
      server_base_url: import.meta.env.VITE_HOST
    }
  },
  methods: {
    handleSubmit(e) {
      // this.infoFilled = true
      console.log(e)
      e.preventDefault();
      if (this.email.trim() != "" && this.name.trim() != "") {
        this.infoFilled = true
      }
      if (this.infoFilled) {
        axios.post(`${this.server_base_url}/payments/checkout/init/`, {
          email: this.email,
          name: this.name
      }).then(()=> {this.$router.push({name: 'obrigado'})})
      }
    },
  },
  mounted() {
    document.querySelector('.music-player-modal').style.display = 'none'
  },
}
</script>

<template>
    <div class="wrapper">
        <section id="one">
            <div class="containerr">
                <div class="info-container">
                    <h1>Aprenda gratuitamente como ganhar 10 dólares por hora e receber no PayPal</h1>
                    <p style="margin: 20px auto;">
                      Aprenda como você pode iniciar no freelancing e ganhar dez ou mais dólares por hora de casa <br>
                    </p>
                    <form @submit="handleSubmit" method="POST" action="">
                      <div class="form-group">
                        <input v-model="name" type="text" class="form-control" placeholder="Nome" required>
                      </div>
                      <div class="form-group">
                        <input v-model="email" class="form-control" type="email" name="" id="" placeholder="Email" required>
                      </div>
                      <div class="form-group">
                            <button @click="handleSubmit" class="button-56">Baixar Grátis</button>
                        </div>
                    </form>
                </div>
                <div class="image-container"><img src="@/assets/portfolio/images/product 2.png" alt=""></div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@font-face {
  font-family: 'OpenSans';
  src: url("@/assets/portfolio/fonts/Open_Sans/OpenSans-VariableFont.ttf");
}

@font-face {
  font-family: 'playScript';
  src: url("@/assets/portfolio/fonts/playlistScript/Playlist_Script.otf");
}

@font-face {
  font-family: 'BebasNeue';
  src: url("@/assets/portfolio/fonts/BebasNeue-Regular.ttf");
}

h1 {
    font-weight: 700;
    font-family: 'BebasNeue', sans-serif;
    font-size: 4rem;
    /* text-transform: uppercase; */
}

#one {
    background: linear-gradient(to bottom, rgba(0,0,0, 0.85) 0%, rgba(0,0,0, 0.85) 100%), url(https://2ndskiesforex.com/wp-content/uploads/2018/12/The-4-Stages-To-Becoming-A-Millionaire-Trader.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.wrapper {
  background: rgb(0, 121, 193);
  color: #fff;
  text-align: left;
}

.wrapper h1 {
}

textarea, input[type=text], 
input[type=url], 
input[type=email], 
input[type=password], 
input[type=search], 
input[type=tel], 
input[type=number] {
  background: hsl(0, 0%, 14%);
  line-height: 1.5;
  padding: 15px 10px;
  border: 1px solid hsl(0, 0%, 10%);
  border-radius: 50px;
  width: 100%;
  outline: none;
  color: #afafaf;
  margin: 10px auto;
}
textarea:focus, input[type=text]:focus, 
input[type=url]:focus, 
input[type=email]:focus, 
input[type=password]:focus, 
input[type=search]:focus, 
input[type=tel]:focus, 
input[type=number]:focus {
  background: hsl(0, 0%, 20%);
}

img {width: 100%;}

section {
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.containerr {
    margin-top: 5vh;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.image-container {
    flex-basis: 40%;
    flex-grow: 1;
    max-width: 700px;
}

.info-container {
    max-width: 700px;
    min-width: 330px;
    padding: 20px;
    flex-basis: 60%;
    flex-grow: 1;
}

/* CSS */
.button-56 {
  align-items: center;
  background-color: #fee6e3;
  /* border: 2px solid #111; */
  border-radius: 50px;
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

  margin: 0 auto;
  background: rgba(255,215, 0, 0.9);
  color: #000;
  width: 100%;

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

@media only screen and (max-width: 800px) {
  section {
    margin: 0 auto;
    padding: 0 10px;
  }
  h1 {
    font-size: 1.5rem;
  } 
}
</style>