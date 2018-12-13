<template>
	<v-app id="app">
		<AppNav></AppNav>
		<v-content>
			<v-container fluid>
				<router-view></router-view>			
			</v-container>     
		</v-content>	         	
	</v-app>
</template>

<script>
import AppNav from './components/AppNav.vue'

export default {
  name: "App", 
  components: {
	AppNav 
  }	  
};
</script>

<style>
#app {
	font-family: "Roboto", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
