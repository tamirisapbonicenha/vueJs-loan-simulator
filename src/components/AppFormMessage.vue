<template>
    <div>
        <v-layout justify-center align-center>
            <v-flex class="text-xs-center sm12 lg8">
                <v-card>
                    <v-card-text>
                        <h5 class="headline font-weight-medium mb-4">Obrigado, seu empréstimo foi processado com sucesso!</h5>
                        <p>Em breve entraremos em contato.</p>
                        <div>
                            <v-btn flat color="primary" to="/">Voltar</v-btn>
                        </div>
                    </v-card-text>
                </v-card> 
            </v-flex>
        </v-layout>    
    </div> 
</template>

<script>
export default {
    name: "AppFormMessage",
}
</script>

