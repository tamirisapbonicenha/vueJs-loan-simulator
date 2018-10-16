<template>
	<div>
		<v-card>

			<h6 class="title green darken-1 pa-3"><span class="white--text">Simule seu empréstimo pessoal</span></h6>
			<div class="pa-4">
				<v-avatar color="grey lighten-4" size="100px">
					<img src="../assets/form-image.jpg"> 
				</v-avatar> 

				<v-form ref="form" v-model="valid" lazy-validation>
					<v-text-field label="Valor solicitado (R$)" v-model="value" v-money="money" hint="Apenas valores positivos" :rules="[rules.required]" color="green" ref="valueE"></v-text-field>
					<v-text-field label="Quantidade de parcelas" v-model="portion" mask="##" :rules="[rules.required]" color="green"></v-text-field>
					<v-textarea label="Motivo do empréstimo" v-model="reason" color="green"></v-textarea>				
					<v-text-field label="Vencimento da primeira parcela:" v-model="payDate" mask="date" hint="xx/xx/xxxx" :rules="[rules.required]" color="green"></v-text-field>					
					<v-btn color="primary" :disabled="!valid" @click="simulate">Simular</v-btn>
				</v-form>    

				<AppFormDialog v-bind:value="value" v-bind:valueFormat="valueFormat" v-bind:portion="portion" v-bind:dialog="dialog" v-on:closeModal="onCloseModal"></AppFormDialog>
				
			</div>    

		</v-card>	
	</div>
</template>

<script>
import AppFormDialog from './AppFormDialog.vue'

export default {
	name: "AppFormBox",
    components: {
        AppFormDialog
    }, 	
    data() {
        return {		
			value: '',
			valueFormat: '',
			portion: '',
			reason: '',
			payDate: '',         
			valid: true,
			dialog: false,
            rules: {
                required: value => !!value || 'Campo obrigatório.',
			},            		
			money: {
				decimal: ',',
				thousands: '.',
				precision: 2,
				masked: false
			},			
        };
	}, 

	methods: {	
        simulate: function () {
            if (this.$refs.form.validate() && parseInt(this.value) > 0) {
				this.dialog = true
            } else {
				this.$refs.valueE.$refs.input.focus()
			}
		},
		
		// escutando evento do pai
        onCloseModal: function() {
			this.dialog = false
        }		
	}       
}
</script>