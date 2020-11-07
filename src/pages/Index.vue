<template>
  <div>
    <q-carousel animated v-model="slide" navigation infinite class="carrusel">
      <q-carousel-slide :name="1" img-src="../assets/banPrin.png" />
    </q-carousel>
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
