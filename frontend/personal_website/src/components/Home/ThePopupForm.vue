<script>
export default {
  data() {
    return {
      showPopup: false
    };
  },
  methods: {
    hidePopup() {
      this.showPopup = false;
    }
  },
  mounted() {
    setTimeout(() => {
      this.showPopup = true;
    }, 20000);
  }
};
</script>

<template>
  <div v-if="showPopup" class="popup-wrapper">
    <div class="popup">
      <button @click="hidePopup" id="close"><i class="fas fa-times"></i></button>
      <h2>Contact Form</h2>
      <p>I will get in touch with you soon to book a call</p><br>
      <form action="https://formkeep.com/f/3f423666db1b" accept-charset="UTF-8" enctype="multipart/form-data" method="POST">
        <label for="name">*Name:</label>
        <input type="text" id="name" name="name" required><br><br>

        <label for="email">*Email:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="phone">*Phone:</label>
        <input type="tel" id="phone" name="phone" required><br><br>

        <label for="website">Website:</label>
        <input type="url" id="website" name="website"><br><br>

        <input class="cta" type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<style  scoped>
.popup-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 4%;
}

.popup {
  position: relative;
  background: #212121;
  border-radius: 10px;
  padding: 20px;
  width: 500px;
  text-align: left;
}

@media only screen and (max-width: 640px) {
  .popup {
    width: 100%;
  }
}

.popup h2 {
  font-weight: 700;
  font-size: 24px;
}

.popup .cta {
  padding: 10px 50px;
  margin: 10px 0;
  font-size: 16px;
  background: rgb(176, 136, 255);
}

.popup #close {
  /* background: transparent; */
  padding: 0;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: absolute;
  top: -45px;
  right: -15px;
}

textarea, input[type=text], 
input[type=url], 
input[type=email], 
input[type=password], 
input[type=search], 
input[type=tel], 
input[type=number] {
  background: hsl(0, 0%, 14%);
  line-height: 1.2;
  padding: 10px 10px;
  border: 1px solid hsl(0, 0%, 10%);
  border-radius: 10px;
  width: 100%;
  outline: none;
  color: #afafaf;
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

label {
  font-size: 0.9rem;
  color: #afafaf;
}
</style>
