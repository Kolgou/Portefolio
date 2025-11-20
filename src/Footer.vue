<template>
        <div class="line"></div>
        <div class="footer">
            <a href="https://github.com/Kolgou" target="_blank"><img src="./img/github1.png" width="85" height="85" alt="Logo" /></a>
            <a href="mailto:ayoubabraha@gmail.com.com" target="_blank"><img src="./img/gmail.png" width="85" height="85" alt="Logo" /></a>
            <a href="https://twitter.com/ayoubaitbraham" target="_blank"><img src="./img/twitter.png" width="85" height="85" alt="Logo" /></a>
            <div class="text">
                <h4>Ayoub AIT BRAHAM - Développeur Web</h4>
                <h4 class="copyright">© Last update: 2025</h4>
                <h4 class="framework">Website created with VueJS</h4>
            </div>
        </div>
</template>

<style scoped>

.text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.text .copyright, .framework {
    font-style: italic;
    color: gray;
}

h4 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.line {
    border-bottom: 1px solid lightgray;
    width: 98%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 2rem auto 2rem auto;
}

.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 1.5rem;
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
}

.footer img:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: transform 0.3s;
}

</style>