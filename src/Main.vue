<template>
    <section class="intro" id="presentation">
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
    <div class="portefolio" id="portfolio">
        <div class="cv">
            <h2>Curriculum Vitae</h2>
            <img src ="./img/CV_CEF.png" width="600" height="700" alt="CV" @click="openCvModal" />
        </div>
        <div class="avis">
            <h2>Poster un avis</h2>
            <img src ="./img/Avis_CEF.png" width="600" height="700" alt="Avis" @click="openAvisModal" />
        </div>
    </div>
    <div class="bg_modal_cv" v-if="showCvModal" @click.self="closeCvModal" ref="sectionModal">
        <div class="CV_modal">
            <img class="close_cv" src="./img/effacer.png" width="50" height="50" alt="Fermer la modal" @click="closeCvModal" />
            <div class="img">
                <img src="./img/CV_CEF.png" width="800" height="900" alt="CV Agrandi" />
            </div>
            <div class="text_modal">
                <ul>
                    <li><h1>Projet :</h1></li>
                    <li><h2>Curriculum Vitae</h2></li>
                    <li><h1>Date de réalisation :</h1></li>
                    <li><h2>4 Novembre 2023</h2></li>
                    <li><h1>Technologies utilisées :</h1></li>
                    <li><h2>HTML, CSS</h2></li>
                    <li><h1>Lien :</h1></li>
                    <li><h2><a target="_blank" href="https://github.com/Kolgou/Devoir-CEF.git">Cliquer ici !</a></h2></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="bg_modal_avis" v-if="showAvisModal" @click.self="closeAvisModal">
        <div class="avis_modal">
            <img class="close_avis" src="./img/effacer.png" width="50" height="50" alt="Fermer la modal" @click="closeAvisModal" />
            <div class="img">
                <img src="./img/avis_CEF.png" width="800" height="900" alt="CV Agrandi" />
            </div>
            <div class="text_modal">
                <ul>
                    <li><h1>Projet :</h1></li>
                    <li><h2>Dynamiser un espace commentaire</h2></li>
                    <li><h1>Date de réalisation :</h1></li>
                    <li><h2>29 Décembre 2023</h2></li>
                    <li><h1>Technologies utilisées :</h1></li>
                    <li><h2>HTML, CSS, JavaScript</h2></li>
                    <li><h1>Lien :</h1></li>
                    <li><h2><a target="_blank" href="https://github.com/Kolgou/index-modifi-.git">Cliquer ici !</a></h2></li>
                </ul>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue'

const showCvModal = ref(false);
const showAvisModal = ref(false);

const openCvModal = () => (showCvModal.value = true);
const closeCvModal = () => (showCvModal.value = false);
const openAvisModal = () => (showAvisModal.value = true);
const closeAvisModal = () => (showAvisModal.value = false);
</script>

<style scoped>

/** Partie Avis **/

.avis_modal .close_avis {
    position: absolute;
    top: 2rem;
    left: 22rem;
}

.avis_modal .close_avis:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s;
}

.bg_modal_avis {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.5);
}

.avis_modal {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2rem 3rem 2rem 3rem;
    background-color: #C0F0F0;;
    padding: 2rem auto 2rem auto;
    width: 60%;
    margin: auto;
    border-radius: 12px;
    z-index: 10000;
}

.avis_modal li {
    list-style: none;
    margin: 0;
}

.avis_modal h1 {
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border-radius: 12px;
    background-color: lightgray;
}

.avis_modal a {
    text-decoration: none;
    color: gray;
}

.avis_modal h2 {
    color: gray;
    font-family: 'Arial Narrow', Arial, sans-serif;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 12px;
    background-color: skyblue;
    margin-bottom: 3rem;
    padding-left: 1rem;
}

.avis_modal a:hover {
    cursor: pointer;
    color: blue;
}

/** Partie CV Modal **/

.CV_modal .close_cv {
    position: absolute;
    top: 2rem;
    left: 22rem;
}

.CV_modal .close_cv:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s;
}

.bg_modal_cv {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
}

.CV_modal {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2rem 3rem 2rem 3rem;
    background-color: lightcyan;
    padding: 2rem auto 2rem auto;
    width: 60%;
    margin: auto;
    border-radius: 12px;
    z-index: 10000;
}

.CV_modal li {
    list-style: none;
    margin: 0;
}

.CV_modal h1 {
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border-radius: 12px;
    background-color: lightgray;
}

.CV_modal a {
    text-decoration: none;
    color: gray;
}

.CV_modal h2 {
    color: gray;
    font-family: 'Arial Narrow', Arial, sans-serif;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    border-radius: 12px;
    background-color: skyblue;
    margin-bottom: 3rem;
    padding-left: 1rem;
}

.CV_modal a:hover {
    cursor: pointer;
    color: blue;
}

/** Partie portefolio **/

.cv h2, .avis h2 {
    background-color: beige;
    padding: 0.8rem 0 0.8rem 0.5rem;
    border-radius: 12px 12px 12px 12px;
}

.portefolio {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 4rem;
}

.portefolio img:hover {
    transform: scale(1.02);
    transition: transform 0.3s;
    cursor: pointer;
    box-shadow: 10px 10px;
}

.line {
    border-bottom: 1px solid lightgray;
    width: 98%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2rem auto 2rem auto;
}

/** Partie présentation **/

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
    margin: 11rem auto 4rem auto;
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