import {
    Navbar,
    NavbarToggleButton
} from "src/components/UIComponents";

export default {
    components: {
        Navbar,
        NavbarToggleButton,
    },
    data() {
        return {
            activeNotifications: false,
            showNavbar: false,
            notificacao: [],
            notificacaoNaoLida: null,
            id_notificacao_beneficiario_array: [],
            usuario: JSON.parse(localStorage.getItem("usuario")),
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

        consultarNotificacao() {
            //
        },

        corrigirInformacoes(arr) {
            //
        },

        limparNotificacoes() {
            //
        },
    },
    created() {
        this.consultarNotificacao();
    },

    watch: {},
};
