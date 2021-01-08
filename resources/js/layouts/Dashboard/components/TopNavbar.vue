<template>
    <navbar v-model="showNavbar">
        <div class="navbar-wrapper">
            <div class="navbar-minimize">
                <button
                    id="minimizeSidebar"
                    @click="minimizeSidebar"
                    class="minimizeSidebar"
                >
                    <i
                        class="fa fa-bars text-center visible-on-sidebar-mini"
                    ></i>
                    <i
                        class="fa fa-bars text-center visible-on-sidebar-regular"
                    ></i>
                </button>
            </div>
            <div class="navbar-toggle">
                <navbar-toggle-button @click.native="toggleSidebar">
                </navbar-toggle-button>
            </div>
            <a class="navbar-brand" href="#pablo"></a>
        </div>

        <template slot="navbar-menu">
            <form>
                <div class="input-group no-border">
                    <el-autocomplete
                        class="inline-input"
                        v-model="state1"
                        :fetch-suggestions="querySearch"
                        placeholder="Please Input"
                        @select="handleSelect"
                    >
                        <i
                            slot="suffix"
                            class="el-input__icon el-icon-search"
                        ></i>
                    </el-autocomplete>
                </div>
            </form>

            <ul class="navbar-nav">
                <el-dropdown class="nav-item" trigger="click">
                    <div class="avatar-wrapper nav-link">
                        <i class="fa fa-bell"></i>
                        <i class="el-icon-caret-bottom" />
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <router-link to="/profile/index">
                            <el-dropdown-item>Notificações</el-dropdown-item>
                        </router-link>
                        <router-link to="/">
                            <el-dropdown-item>Mensagens</el-dropdown-item>
                        </router-link>
                    </el-dropdown-menu>
                </el-dropdown>

                <li class="nav-item">
                    <a class="nav-link btn-rotate" href="#pablo">
                        <i class="nc-icon nc-settings-gear-65"></i>
                        <p>
                            <span class="d-lg-none d-md-block"
                                >Configurações</span
                            >
                        </p>
                    </a>
                </li>

                <el-dropdown class="nav-item" trigger="click">
                    <div class="avatar-wrapper nav-link">
                        <i class="fa fa-user"></i>
                        <i class="el-icon-caret-bottom" />
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item >
                            <a class="d-block" >Meu prefil</a>
                        </el-dropdown-item>
                        <el-dropdown-item >
                            <a class="d-block" @click.prevent="logout">Sair</a>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </ul>
        </template>
    </navbar>
</template>
<script>
import { Navbar, NavbarToggleButton } from 'src/components/UIComponents';
import { logout } from '@/services/authentication';

export default {
    components: {
        Navbar,
        NavbarToggleButton,
    },
    data() {
        return {
            search: '',
            activeNotifications: false,
            showNavbar: false,
            notificacao: [],
            notificacaoNaoLida: null,
            id_notificacao_beneficiario_array: [],
            usuario: JSON.parse(localStorage.getItem('usuario')),
            links: [],
            state1: '',
        };
    },
    methods: {
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        toggleNotificationDropDown() {
            this.activeNotifications = !this.activeNotifications;
        },
        closeDropDown() {
            this.activeNotifications = false;
        },
        toggleSidebar() {
            this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
        },
        hideSidebar() {
            this.$sidebar.displaySidebar(false);
        },
        minimizeSidebar() {
            this.$sidebar.toggleMinimize();
        },
        toggleNavbar() {
            this.showNavbar = !this.showNavbar;
        },
        querySearch(queryString, cb) {
            var links = this.links;
            var results = queryString
                ? links.filter(this.createFilter(queryString))
                : links;
            // call callback function to return suggestions
            cb(results);
        },
        createFilter(queryString) {
            return (link) => {
                return (
                    link.value
                        .toLowerCase()
                        .indexOf(queryString.toLowerCase()) === 0
                );
            };
        },
        loadAll() {
            return [
                { value: 'vue', link: '#' },
                { value: 'element', link: '#' },
                { value: 'cooking', link: '#' },
                { value: 'mint-ui', link: '#' },
                { value: 'vuex', link: '#' },
                { value: 'vue-router', link: '#' },
                { value: 'babel', link: '#' },
                { value: 'vue2', link: '#' },
                { value: 'element2', link: '#' },
                { value: 'cooking2', link: '#' },
                { value: '2mint-ui', link: '#' },
                { value: '2vuex', link: '#' },
                { value: '2vue-router', link: '#' },
                { value: '2babel', link: '#' },
                { value: '3vue', link: '#' },
                { value: '3element', link: '#' },
                { value: '3cooking', link: '#' },
                { value: '3mint-ui', link: '#' },
                { value: '3vuex', link: '#' },
                { value: '3vue-router', link: '#' },
                { value: '3babel', link: '#' },
            ];
        },
        handleSelect(item) {
            console.log(item);
        },
        logout() {
			logout()
			this.$router.push('/')
        },
    },
    mounted() {
        this.links = this.loadAll();
    },
};
</script>
<style>
.text-center {
    text-align: right;
}
.minimizeSidebar {
    background-color: transparent;
    outline: none !important;
    border: none;
    color: #333;
    font-size: 1.4rem;
}
</style>
