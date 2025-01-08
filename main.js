// Remover foto e navbar  para dispositivos móveis
if (window.screen.width <= 700) {
   let photo  = document.querySelector("#minha-imagem");
   let navbar = document.querySelector("nav");
   photo.remove();
   navbar.remove();
}

const components = {
   data() {
      return {
         Age: Vue.ref(0),
      }
   },

   methods: {
      CalculateAge() {
         // Constantes
         const currentDate = new Date();
         const currentYear = currentDate.getFullYear();
         console.log('Hello from Vue.js');

         // Idade
         var idadeBox    = document.querySelector("#idade");
         const birthDate = 2005;
         this.Age = `<b>Idade:</b> ${currentYear - birthDate} Anos`;
      }
   },

   beforeMount() {
      this.CalculateAge();
   },
};

Vue.createApp(components).mount("#App");
