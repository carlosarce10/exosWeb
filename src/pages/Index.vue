<template>
<div class="q-pa-md">
  <div>
    <q-carousel animated v-model="slide" navigation infinite class="carrusel">
      <q-carousel-slide :name="1" img-src="../assets/banPrin.png" />
    </q-carousel>
  </div>

   <div class="row" id="nosotros">
     <div class="col-12 col-md-4 offset-md-2">
       <h3>Acerca</h3> 
       <h3>de nosotros</h3>
     </div>
     <div class="col-12 col-md-6" >
       <p>Nos constituímos como una sociedad en 2016 con el propósito de</p>
       <p>ofrecer servicios especializados de <b>medios de pago, consultoría y</b></p>
       <p><b>desarrollo de software.</b></p>

       <p>Contamos con <b>más de 25 años de experiencia laboral,</b> trabajando</p>
       <p>con Bancos, Instituciones Financieras y Fintechs, Nacionales e</p>
       <p>Internacionales</p>

       <p>Formamos un equipo <b>multidisciplinario</b> con experiencias en diversos</p>
       <p>ámbitos tales como Medios de pago, TI, Operaciones, Negociación y</p>
       <p>Relaciones entre participantes en el mercado mexicano</p>
     </div>
      
    </div>
    <div class="row" id="clientes">
      <div class="col-12 col-md-12">
        <h4>Nuestros clientes</h4>
        <img src="../assets/clientes.png" alt="">
      </div>
    </div>
</div>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      slide: 1
    };
  }
};
</script>
