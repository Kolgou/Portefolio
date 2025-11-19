<template>
    <div class="whole">
        <div class="header">
            <div class="leftheader">
                <img src="./img/codage.png" width="25" height="25" alt="Logo" />
                <h2>Ayoub AIT BRAHAM</h2>
                <h4>Développeur Web</h4>
            </div>
            <div class="rightheader">
                <h4>Présentation</h4>
                <h4>Portefolio</h4>
                <h4>404</h4>
            </div>
        </div>
        <div class="line"></div>
    </div>
</template>

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

.rightheader h4 {
    margin: 0 1em 0 1em;
    color: gray;
    font-style: italic;
}

.rightheader h4:hover {
    cursor: pointer;
    transform: scale(1.1);
}

.whole {
    display: flex;
    flex-direction: column;
}

.line {
    border-bottom: 1px solid lightgray;
    width: 98%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2rem auto 2rem auto;
}
</style>