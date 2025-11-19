<template>
    <section class="intro">
      <img src="./img/homme.png" alt="Ayoub AIT BRAHAM" width="350" height="350" />
      <div class="presentation">
        <h1>Ayoub AIT BRAHAM</h1>
        <h2>Présentation</h2>
        <p>
          Je suis un étudiant suivant une formation développeur web et web mobile au Centre Européen
          de Formation. Je conçois et développe des applications web modernes, réactives et accessibles.
          J'aime transformer des idées en interfaces claires et performantes, en
          privilégiant le code maintenable et l'expérience utilisateur.
        </p>
      </div>
    </section>
    <section class="skills">
      <h2>Compétences</h2>
      <img src="./img/html-5.png" alt="HTML5"></img>
      <img src="./img/css-3.png" alt="CSS3"></img>
      <img src="./img/script-java.png" alt="JavaScript"></img>
      <img src="./img/document.png" alt="Vue.js"></img>
    </section>
    <div class="line"></div>
    <div class="portefolio">
    </div>
    
</template>

<style scoped>

.line {
    border-bottom: 1px solid lightgray;
    width: 98%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2rem auto 2rem auto;
}

.skills {
    text-align: center;
    margin-bottom: 4rem;
}

.skills h2 {
    margin-bottom: 3rem;
}

.skills img {
    width: 210px;
    height: 210px;
    margin: 1rem;
}

.skills img:hover {
    width: 220px;
    height: 220px;
    margin: 0 1rem 0 1rem;
}

.intro {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    max-width: 800px;
    max-height: 15rem;
    margin: 5rem auto;
    padding: 1rem 4rem 2rem 4rem;
    background-color: cyan;
    border-radius: 12px;
}

.intro img {
    margin: -4rem auto;
}

.presentation {
    margin-left: 4rem;
    justify-content: center;
}

h1, h2, h3, h4, h5, h6{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

h1 {
    font-size: 1.8rem;
}

p {
    font-size: 1rem;
    font-family: 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
    color: grey;
}

</style>