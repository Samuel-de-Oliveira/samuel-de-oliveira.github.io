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
         Age:        Vue.ref(0),
         PeriodoMat: Vue.ref(2),

         EMail:  Vue.ref("samwolfg12@gmail.com"),
         phoneNumber: Vue.ref("(82) 99912-9253"),
         Github:  Vue.ref("@Samuel-de-oliveira"),
         Linkedin:     Vue.ref("@s-de-oliveira"),
         Instagram:      Vue.ref("@wolfito-sam"),
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
         return (currentYear - birthDate);
      }
   },

   beforeMount() {
      this.Age = this.CalculateAge();
   },
};

Vue.createApp(components).mount("#App");
