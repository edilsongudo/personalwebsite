<script>
    export default {
        mounted() {
            document.querySelector('html').classList.remove('dark-mode')
            document.querySelector('.music-player-modal').style.display = 'none'
        },
        methods: {
            goToCheckoutPage() {
                this.$router.push({name: 'finalizar-compra'})
            }
        },
    }
</script>

<template>
    <div class="wrapper">
        <section>
            <div class="containerr">
                <div class="info-container">
                    <h1>Como ganhar mais com suas habilidades tendo liberdade geográfica e de tempo</h1>
                    <p style="margin: 20px auto;">Aprenda como conseguir os seus primeiros dez clientes trabalhando remotamente para qualquer parte do Brasil ou do mundo.
                    </p>
                    <button @click="goToCheckoutPage" class="go-checkout-btn">Quero Aprender Agora <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div class="image-container">
                    <img src="@/assets/portfolio/images/banner.webp" alt="">
                </div>
            </div>
        </section>
        <section class="section2">
            <div class="what-is-freelancer">
                <h2>O que é ser um freelancer?</h2>
                <p>Freelancer é um tipo de trabalho autônomo. Em vez de estar vinculado única e exclusivamente a uma empresa, o freelancer trabalha por conta própria, prestando seus serviços para empresas, negócios ou pessoas.</p>
                <p>A grande diferença com os trabalhadores comuns é que os freelancers podem trabalhar com horários flexíveis, através de locais flexíveis e, com projetos flexíveis.</p>
            </div>
            <div class="what-is-freelancer">
                <h2>Que tipo de trabalho freelancers fazem?</h2>
                <p> Freelancers podem realizar as mais diversas das profissões. Porém as mais vantajosas são as com maior capacidade de serem exercidas remotamente. Exemplos incluem programação, design, edição de vídeo, redação, tradução, gestão de mídias sociais, consultoria ou ensino, para mencionar somente algumas. 
                </p>
            </div>
        </section>
        <section class="section3">
            <div class="what-is-freelancer">
                <h2>Você tem sofrido com alguma destas coisas?</h2>
                <p><i class="fas fa-check"></i> Você está infeliz com seu trabalho atual</p>
                <p><i class="fas fa-check"></i> Você tentou plataformas de freelancer, mas não conseguiu um único cliente</p>
                <p><i class="fas fa-check"></i> Você tem uma habilidade preciosa em algum nicho, mas não sabe como ganhar dinheiro com ela</p>
                <p><i class="fas fa-check"></i> Você não gosta de passar um terço da sua vida em um escritório trabalhando para realizar os sonhos de outra pessoa</p>
                <p><i class="fas fa-check"></i> Você está cansado de ficar preso a uma cidade e adoraria encontrar um emprego remoto para poder trabalhar de qualquer lugar</p>
                <p><i class="fas fa-check"></i> Você tem muito tempo livre e quer fazer algo produtivo com ele</p>   
            </div>
            <div class="what-is-a-freelancer">
                <p>Se você se identifica com pelo menos uma dessas afirmações, não se desespere. <br>
                    Tudo o que você precisa é o conhecimento que menos de 2% das pessoas têm, e que você irá aprender neste curso.
                </p>                             
            </div>
        </section>
        <div class="container-topics">
            <h2>Você só precisa saber isso</h2>
            <!-- <p>Some of the things you will learn</p> -->
            <!-- Topic-->
            <div class="topic-container">
                <div class="topic-info">
                    <div>
                        <h3>1. Como conseguir seu primeiro cliente sem nada para mostrar</h3>
                        <p>
                            Vou te ensinar como procurar o seu primeiro trabalho freelancer, que critérios usar na busca, como se candidatar e, como convencer o cliente a te contratar.
                        </p>
                    </div>
                </div>
                <div class="topic-image"><img src="@/assets/portfolio/images/first-job.webp" alt=""></div>
            </div>
            <!-- Topic-->
            <div class="topic-container wrap-reverse">
                <div class="topic-image"><img src="@/assets/portfolio/images/client-reply.webp" alt=""></div>
                <div class="topic-info">
                    <div>
                        <h3>2. Como enviar primeiras mensagens altamente persuasivas + modelos de mensagem</h3>
                        <p>Você aprenderá como enviar primeiras mensagens que façam com que as pessoas desejem trabalhar com exclusivamente com você. E como conversar com elas durante todo o processo até que decidam se tornar clientes suas</p>
                    </div>
                </div>
            </div>
            <!-- Topic-->
            <div class="topic-container">
                <div class="topic-info">
                    <div>
                        <h3>3. Como criar um bom perfil e como fazer branding pessoal</h3>
                        <p>Você aprenderá como criar um "perfil que vende" nas plataformas de freelancing e redes sociais. Você aprenderá elaborar um perfil matador e que se destaque entre os demais.
                        <br>Vou mostrar o que os potenciais clientes mais valorizam no momento em que decidem escolher um freelancer para resolver seus problemas</p>
                    </div>
                </div>
                <div class="topic-image"><img src="@/assets/portfolio/images/good-prosal-hint.webp" alt=""></div>
            </div>
            <!-- Topic-->
            <div class="topic-container wrap-reverse">
                <div class="topic-image"><img src="@/assets/portfolio/images/winner-proposal.webp" alt=""></div>
                <div class="topic-info">
                    <div>
                        <h3>4. O que as propostas vencedoras têm em comum</h3>
                        <p>Vou mostrar as minhas melhores propostas e por que elas me ajudaram a conseguirir os trabalhos que realizei</p>
                    </div>
                </div>
            </div>
            <!-- Topic-->
            <div class="topic-container">
                <div class="topic-info">
                    <div>
                        <h3>5. Lista de habilidades com altíssima demanda que não exigem um diploma universitário e que você pode aprender gratuitamente e monetizar em 2 a 8 meses</h3>
                        <p>Mostrarei habilidades que qualquer pessoa pode aprender em casa com 2 horas de consistência diária.
                        <br>Vou contar como organizaria meu aprendizado e quais recursos usaria para aprendê-las gratuitamente e poder ganhar de 5 a 6 dígitos (de dólar) por ano</p>
                    </div>
                </div>
                <div class="topic-image"><img src="@/assets/portfolio/images/skill-to-learn.webp" alt=""></div>
            </div>
            <!-- Topic-->
            <div class="topic-container wrap-reverse">
                <div class="topic-image"><img src="@/assets/portfolio/images/mistakes.webp" alt=""></div>
                <div class="topic-info">
                    <div>
                        <h3>6. Erros cometidos por freelancers que os impedem de ganhar dinheiro</h3>
                        <p>Mostrarei os erros cometidos por freelancers que os fazem perder potenciais empregos, dinheiro ou reputação, para que você possa evitá-los com sucesso</p>
                    </div>
                </div>
            </div>
            <!-- Topic-->
            <div class="topic-container">
                <div class="topic-info">
                    <div>
                        <h3>7. Como conseguir clientes nas redes sociais</h3>
                        <p>Ensinarei como você pode conseguir clientes através das redes sociais e como consegui um contrato internacional com uma empresa através de um grupo WhatsApp.</p>
                    </div>
                </div>
                <div class="topic-image"><img src="@/assets/portfolio/images/social_media.webp" alt=""></div>
            </div>
            <div class="what-is-freelancer">
            <h2>Este curso é para você?</h2>
            <p><i class="fas fa-check"></i> Este curso é para todas as pessoas que amam a liberdade geográfica e gostariam de poder de escolher de onde trabalhar</p>
            <p><i class="fas fa-check"></i> Este curso é para todas as pessoas que gostariam de ganhar a vida em outra moeda, como o dólar, euro ou libra</p>
            <p><i class="fas fa-check"></i> Este curso é para todos que gostariam de aprender ou já possuem qualquer habilidade que não exija um diploma universitário, e gostariam de saber como conseguir clientes e ganhar muito dinheiro</p>
            <p><i class="fas fa-check"></i> Este curso é para todos que desejam fazer uma renda extra</p>        
            </div>
            <div class="cta-container">
                <!-- <p class="price">$55</p> -->
                <p>Não perca esta oportunidade</p>
                <button @click="goToCheckoutPage" class="go-checkout-btn">Quero Aprender Agora <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div>
                <h2>Sobre o instrutor</h2>
                <div class="about-me-container">
                    <div class="about-me-image"></div>
                    <div class="about-me-info">
                        Edilson Gudo é um freelancer que trabalhou com dezenas de clientes em mais de quatro continentes. 
                        <br>Alguns de seus clientes foram dos EUA, Canadá, Reino Unido, Brasil, África do Sul e Índia.
                        <br>Sendo um desenvolvedor de software autodidata, conseguiu seu primeiro cliente oito meses após seu contato inicial com a programação.
                    </div>
                </div>
            </div>

            <div class="cta-container">
                <p>Não perca esta oportunidade</p>
                <button @click="goToCheckoutPage" class="go-checkout-btn">Quero Aprender Agora <i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <footer>Feito com ❤️ por Edilson Gudo</footer>
        </div>
    </div>
</template>

<style scoped>
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

h1 {
    font-size: 3rem;
    font-family: 'Edo', 'Exo2', 'Josefin Sans';
}

h2 {
    font-size: 2rem;
    font-weight: bold;
    font-family: 'Exo2';    
}

h3 {
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'Exo2';    
}

img {
    width: 100%;
}

section {
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.containerr {
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.section2 {

}

.section2 h1, .section2 h2, .section2 h3 {
}

.section3 {
}

.section3 h1, .section3 h2, .section3 h3 {
}

.image-container {
    max-width: 500px;
    padding: 20px;
}

.info-container {
    text-align: left;
    max-width: 700px;
    padding: 20px;
}

.price {
    font-size: 2rem;
    font-size: bolder;
    color: #000;
    margin-top: 15px;
    margin-bottom: 30px;
}

.go-checkout-btn {
    max-width: 400px;
    padding: 15px 25px;
    background: #000;
    border-radius: 6px;
    font-family: 'Exo2', 'Josefin Sans';
    background: #48A9A6;
    transition: .1s;
}

.go-checkout-btn:hover {
    filter: brightness(1.1);
}

.dark-mode .go-checkout-btn {
    background: #E8DD78;
    color: #000;
}

/* .emphasis {
    color: #48A9A6;
} */

.what-is-freelancer {
    margin: 50px auto;
    max-width: 940px;
}

.container-topics {
    max-width: 96%;
    margin: 100px auto;
}

.topic-container {
    margin: 50px auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.topic-info {
    display: flex;
    align-items: center;
    width: 640px;
}

.topic-image {
    width: 330px;
    display: flex;
    align-items: center;
}

.wrap-reverse {
    flex-wrap: wrap-reverse;
}

.cta-container {
    margin: 100px auto;
}

.about-me-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 30px auto;
}

.about-me-info {
    width: 640px;
    text-align: left;
}
.about-me-image {
    background: url(@/assets/portfolio/images/Edilson.webp);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50px;
    width: 100px;
    height: 100px;
}

@media only screen and (max-width: 800px) {
  section {
    margin: 0 auto;
    padding: 0 10px;
  }
  h1 {
    font-size: 2rem;
  } 
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.125rem;
  } 
}
</style>