<template>
    <div class="whole">
        <div class="header">
            <div class="leftheader">
                <img id="image" src="./img/codage.png" @click.prevent="scrollToTop" width="25" height="25" alt="Logo" />
                <h2>Ayoub AIT BRAHAM</h2>
                <h4>Développeur Web</h4>
            </div>
            <div class="rightheader">
                <h4><a href="#" @click.prevent="scrollToTop">Présentation</a></h4>
                <h4><a href="#" @click.prevent="scrollToBottom">Portefolio</a></h4>
                <h4><router-link to="/error">404</router-link></h4>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>

<script setup>

    function scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

    function scrollToBottom() {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }

</script>

<style scoped>

h1, h2, h3, h4, h5, h6 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1.5rem 0 0 0;
}

.leftheader {
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
}

.leftheader img{
    margin-left: 1.5rem;
}

.leftheader img:hover{
    cursor: pointer;
}

.leftheader h2{
    margin: 0 1.5em 0 1.5em;
}

.leftheader h4{
    margin: 0.3rem 0 0 0;
    color: gray;
}

.rightheader {
    display: flex;
    flex-direction: row;
    margin-right: 2rem;
}

.rightheader h4, a {
    margin: 0.3em 1em 0 1em;
    color: gray;
    font-style: italic;
    text-decoration: none;
}

.rightheader h4:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.whole {
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: aliceblue;
    position: fixed;
    top: 0;          /* coller en haut */
    left: 0;
    right: 0;
    z-index: 50;
}

.line {
    border-bottom: 1px solid lightgray;
    width: 98%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2rem auto 0 auto;
}
</style>