<template>
  <q-layout class="">
    <q-header id="nav" class="topnav">
      <q-toolbar class="q-pt-xl q-pb-xl bg-white">
        <img
          class="q-ml-xl"
          src="../assets/logo.png"
          style="height: 60px; max-width: 140px"
        />
        <q-space />
        <div class="nav-links">
          <q-tabs shrink>
            <q-tab class="letras" name="tab1" label="Nosotros"></q-tab>
            <q-tab class="letras" name="tab2" label="Experiencia"></q-tab>
            <q-tab class="letras" name="tab3" label="Producto"></q-tab>
            <q-tab class="letras" name="tab4" label="Servicios"></q-tab>
            <q-tab class="letras" name="tab5" label="Contacto"></q-tab>
          </q-tabs>
        </div>
        <div class="burger">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
      </q-toolbar>
    </q-header>
    <router-view></router-view>
  </q-layout>
</template>
<script>
import "../css/estilos.css";
import "../js/app.js";
export default {
  name: "MainLayout",
  data() {
    return {};
  }
};
</script>
