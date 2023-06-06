<script>
import axios from "axios";
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
export default {
  setup() {
    const schema = yup.object({
      email: yup.string().required().email(),
      name: yup.string().required(),
    });
    return {
      schema,
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage,
  },
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
      this.infoFilled = true

      axios.post(`${this.server_base_url}/payments/checkout/init/`, {
          email: this.email,
          name: this.name
      })
    },
  },
  mounted() {

    var state = this

    document.querySelector('html').classList.remove('dark-mode')
    document.querySelector('.music-player-modal').style.display = 'none'
    
    paypal.Buttons({

    // Sets up the transaction when a payment button is clicked

    createOrder: (data, actions) => {

      return actions.order.create({

        purchase_units: [{

          amount: {

            value: '97' // Can also reference a variable or function

          }

        }]

      });

    },

    // Finalize the transaction after payer approval

    onApprove: (data, actions) => {

      return actions.order.capture().then(function(orderData) {

        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
        
        const transaction = orderData.purchase_units[0].payments.captures[0];

        axios.post(`${state.server_base_url}/payments/order/receive/`, {
          transaction_id: transaction.id,
          email: state.email,
          name: state.name
        }).then((res)=> {
          state.$router.push({name: 'obrigado'})          
        })

      });
    }

    }).render('#paypal-button-container');
  },
}
</script>

<template>
    <div class="checkout-container">
      <div class="product-info">
        <div class="product-image"></div>
        <div>
          <h1>Liberdade Freelancer</h1>
          <p class="author">Autor: Edilson Gudo</p>
          <!-- <p class="old-price">$99</p> -->
          <p class="price">R$97,00</p>
        </div>
      </div>
      <div v-show="!infoFilled" class="product-mini-description">
        Aprenda tudo o que você precisa para iniciar sua jornada como freelancer e faturar seus primeiros R$ 5 mil recorrentes apartir de casa
        <!-- <br>Enjoy a 45% discount today -->
      </div>
      <div v-show="infoFilled" class="product-mini-description">
        Você pode pagar com sua conta PayPal ou com o Cartão
      </div>
      <div v-show="!infoFilled" class="costumer-info">
      <Form @submit="handleSubmit" :validation-schema="schema">
        <div class="form-group">
          <Field v-model="email" class="form-control" name="email" type="email" placeholder="Seu email" />
          <ErrorMessage class="invalid" name="email" />
        </div>
        <div class="form-group">
          <Field v-model="name" class="form-control" name="name" type="text" placeholder="Seu nome" />
          <ErrorMessage class="invalid" name="name" />
        </div>
        <div class="form-group">
          <button class="continue-to-payment">Finalizar Compra <i class="fas fa-shopping-cart"></i> </button>
        </div>
      </Form>
      </div>
      <div v-show="infoFilled" id="paypal-button-container"></div>
    </div>
</template>

<style scoped>
.invalid {
  color: #dc3545;
  font-size: 0.8rem;
}

.costumer-info {
  text-align: left;
  margin-bottom: 50px;
}

.form-group {
  margin-bottom: 10px;
}

@font-face {
  font-family: "Josefin Sans";
  src: url("@/assets/portfolio/fonts/JosefinSans-VariableFont_wght.ttf");
}

@font-face {
  font-family: 'Exo2';
  src: url("@/assets/portfolio/fonts/Exo2-VariableFont_wght.ttf");
}

@font-face {
  font-family: 'Edo';
  src: url("@/assets/portfolio/fonts/edo.ttf");
}

body, div, p {
    font-family: 'Exo2', 'Josefin Sans', sans-serif;
}

.checkout-container {
  margin: 0 auto;
  max-width: 760px;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
}

.product-info {
  margin: 0px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}

.old-price {
  text-decoration: line-through;
  font-size: 0.75rem;
}

.price {
  font-weight: bold;
  font-size: 2rem;
  color: #3b3b3b;
}

.author {
  font-size: 0.85rem;
}

.product-image {
  margin: 20px;
  width: 250px;
  height: 250px;
  background: url(@/assets/portfolio/images/product.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 4px;
}

h1 {
  font-size: 1.5rem;
  font-family: 'Edo';
}

.product-mini-description {
  text-align: left;
  color: #3b3b3b;
  font-size: 0.9rem;
  margin: 10px auto;
}

.continue-to-payment {
  width: 300px;
  padding: 10px 20px;
  background: #000;
  border-radius: 6px;
  font-family: 'Exo2', 'Josefin Sans';
  background: #48A9A6;
}

input[type="text"], input[type="email"] {
  padding: 10px;
}

@media only screen and (max-width: 800px) {
  .checkout-container {
    margin: 0 auto;
    max-width: 96%;
  }
}
</style>
