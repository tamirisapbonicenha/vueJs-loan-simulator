<template>
	<div>
		<v-toolbar dark color="green darken-1">
			<v-toolbar-title><img src="../assets/toolbar-icon.png"> </v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
			<v-btn flat to="/sobre">Sobre</v-btn>
			</v-toolbar-items>
		</v-toolbar>

    </div>
</template>     

<script>
export default { 
    name: "AppNav", 
    data() { 
        return {
            
        }
    }
}
</script>