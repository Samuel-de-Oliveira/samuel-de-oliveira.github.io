// Remover foto e navbar para dispositivos móveis
if (window.screen.width <= 700) {
   let photo  = document.querySelector("#minha-imagem");
   let navbar = document.querySelector("nav");
   photo.remove();
   navbar.remove();
}

// Componentes do Vue.js
const components = {
   data() {
      return {
         // Vai ser calculado
         Age:        Vue.ref(0),
         PeriodoMat: Vue.ref(0),
         
         // Não é calculado
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

         // Idade
         var idadeBox    = document.querySelector("#idade");
         const birthDate = 2005;
         return (currentYear - birthDate);
      },

     CalculatePeriodMath() {
         // Constantes
         const currentDate  = new Date();
         const currentYear  = currentDate.getFullYear();
         const currentMonth = currentDate.getMonth();
         const startDate    = 2024;

         // Calculate
         let Period = (currentYear - startDate) * 2;
         if (currentMonth >= 6) {
           Period++
         } 

         return Period;
     },
   },

   beforeMount() {
      // Version
      console.log(
        `Vue's version is ${Vue.version}`
      );

      this.Age = Vue.ref(
        this.CalculateAge()
      );

      this.PeriodoMat = Vue.ref(
        this.CalculatePeriodMath()
      );
   },
};

Vue.createApp(components).mount("#App"); // Roda Vue
