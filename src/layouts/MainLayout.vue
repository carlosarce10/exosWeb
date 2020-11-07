<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="q-pt-xl bg-white">
        <img
          class="q-ml-xl"
          src="../assets/logo.png"
          style="height: 60px; max-width: 140px"
        />
        <q-space />
        <q-tabs shrink>
          <q-tab class="letras" name="tab1" label="Nosotros"></q-tab>
          <q-tab class="letras" name="tab1" label="Experiencia"></q-tab>
          <q-tab class="letras" name="tab1" label="Producto"></q-tab>
          <q-tab class="letras" name="tab1" label="Servicios"></q-tab>
          <q-tab class="letras" name="tab1" label="Contacto"></q-tab>
        </q-tabs>
      </q-toolbar>
    </q-header>
  </q-layout>
</template>
<script>
import "../css/estilos.css";
export default {
  name: "MainLayout",
  data() {
    return {};
  }
};
</script>
