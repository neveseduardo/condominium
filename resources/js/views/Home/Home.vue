<template>
    <div>
        
    </div>
</template>

<script>
import Carrousel from './components/Carrousel';
import axios from 'axios';

export default {
    components: {
        Carrousel,
    },
    data() {
        return {
            formData: {
                cityInput: '',
                city: '',
            },
            input3: '',
            select: [],
        };
    },
    methods: {
        onSubmit() {
            console.log('submeteu');
        },
        getCities(query, callback) {
            this.clearCity();
            axios
                .get('/cities', {
                    query: query,
                })
                .then((response) => {
                    callback(response.data);
                });
        },
        handleSelectCity(item) {
            this.formData.city = item.value;
        },
        clearCity() {
            this.formData.city = '';
        },
    },
};
</script>

