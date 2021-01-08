<template>
    <div id="app" :class="{'nav-open': $sidebar.showSidebar}">
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
};
</script>
