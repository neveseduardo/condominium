<template>
    <div class="wrapper">
        <el-container>
            <el-header>
                <home-header />
            </el-header>
            <el-main>
                <home-content />
            </el-main>
            <home-footer />
        </el-container>
    </div>
</template>
<script>
import HomeHeader from './components/Header.vue';
import HomeAside from './components/Aside.vue';
import HomeContent from './components/Content.vue';
import HomeFooter from './components/Footer.vue';

export default {
    components: {
        HomeHeader,
        HomeAside,
        HomeContent,
        HomeFooter,
    },
};
</script>
