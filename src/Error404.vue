<template>
    <div class="error404">
        <h1>404</h1>
        <h1>Page Not Found</h1>
        <p>Oops, it seems you clicked on the wrong button</p>
        <div>
            <button><router-link to="/" class="router-link">Accueil</router-link></button>
        </div>
    </div>
</template>

<style scoped>
.error404 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 15%;
    text-decoration: none;
}

.error404 h1 {
    font-size: 6rem;
    margin: 0.5rem 0;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif ;
}

.error404 p {
    font-size: 1.5rem;
    margin: 2rem 0 2rem 0;
    font-family: 'Arial Narrow', Arial, sans-serif;
    font-style: italic;
}

.error404 button {
    background-color: blue;
    border: none;
    padding: 1rem 2rem;
    border-radius: 30px;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 30px;
}

.error404 button:hover {
    background-color: darkblue;
}

.router-link {
    text-decoration: none;
    color: white;
}
</style>