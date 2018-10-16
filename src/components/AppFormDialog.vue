<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="600"> 
            <v-card>
                <v-toolbar dark color="green darken-1">
                <v-btn icon dark v-on:click.stop="close">
                    <v-icon>close</v-icon>
                </v-btn>
                <v-toolbar-title>Resumo do empréstimo</v-toolbar-title>
                </v-toolbar>       

                <v-list three-line subheader>
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Valor solicitado:</v-list-tile-title>
                            <v-list-tile-sub-title class="subheading">R$ {{ value }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Valor a receber:</v-list-tile-title>
                            <v-list-tile-sub-title class="subheading">{{ this.valueReceive | currency('R$', 2, {  thousandsSeparator: '.', decimalSeparator: ',', symbolOnLeft: true, spaceBetweenAmountAndSymbol: true }) }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Número de parcelas:</v-list-tile-title> 
                            <v-list-tile-sub-title class="subheading">{{ portion }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>Taxa de juros:</v-list-tile-title>
                            <v-list-tile-sub-title class="subheading">{{ this.$intRate }}% ao mês</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>  
                    <v-list-tile avatar>
                        <v-list-tile-content>
                            <v-list-tile-title>IOF:</v-list-tile-title>
                            <v-list-tile-sub-title class="subheading">{{ this.$iof }}%</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>                                                                                                                       
                </v-list>                                                                 

                <v-card-actions >
                    <v-spacer></v-spacer>
                    <v-btn color="error" v-on:click.stop="close">Recusar</v-btn>
            
                    <v-btn color="primary" :loading="loading" :disabled="loading" v-on:click="loader = 'loading'">Aceitar</v-btn> 
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
    name: "AppFormDialog",
    props: ['value', 'valueFormat', 'portion', 'dialog'],  
    data() { 
        return {
            loan: '',
            loader: null,
            loading: false,            
        }
    },

    computed: {
        // Tratamento simples para tratar casas decimais
        valueReceive: function () {
            this.loan = this.value.split(".").join("").replace(",", ".")
            return parseFloat(this.loan.replace( /,/g, '')) - this.$loanRates
        }
    },  

    methods: { 
        // emitindo evento para o pai
        close: function() {
            this.$emit('closeModal');
        },

        // Método para envio do form... para implementação.
        // Chama a prop $http da instância Vue que recebe axios. 'Ver constantes em main.js'
        send: function() {
            /*$http.post('/api/submit', {
                value: this.value,
                ...
            })*/
        }
    },
    
    // aconselhável usar o watch para operações assíncronas
    watch: {
        loader: function() {
            const l = this.loader
            this[l] = !this[l]

            setTimeout(() => {
                this[l] = false,
                this.$router.push("/sucesso");
            }, 2000)

            this.loader = null
        }
    }    
}
</script>
