<template>
    <div>
        <header id="header">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </header>

        <main id="page">
            <router-view />
        </main>

        <footer id="footer">
            This is a footer
        </footer>
    </div>
</template>
