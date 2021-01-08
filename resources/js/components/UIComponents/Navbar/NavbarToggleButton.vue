<template>
    <button
        @click="toggleMenu"
        type="button"
        class="navbar-toggler"
        aria-label="Navbar toggle button"
    >
        <span class="navbar-toggler-bar bar1"></span>
        <span class="navbar-toggler-bar bar2"></span>
        <span class="navbar-toggler-bar bar3"></span>
    </button>
</template>
<script>
export default {
    name: 'navbar-toggle-button',
    methods: {
        toggleMenu() {
            this.$emit('change', !this.showNavbar);
        },
    },
};
</script>
<style>
</style>
