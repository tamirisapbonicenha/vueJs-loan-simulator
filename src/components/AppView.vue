<template>
    <div>
        <v-layout justify-center align-center row fill-height>
            <v-flex class="text-xs-center xs12 lg6">

                <AppFormBox></AppFormBox>

            </v-flex>     
        </v-layout>        
    </div> 
</template> 

<script>
import AppFormBox from './AppFormBox.vue'

export default {
    name: "AppView",
    components: {
        AppFormBox
    },    
    data() {
        return {
                     
        }
    },  
}
</script>