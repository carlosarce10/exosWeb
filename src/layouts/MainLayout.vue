<template>
  <q-layout >
    <q-header id="nav" class="topnav" elevated >
      <q-toolbar class="q-pt-xl q-pb-lg bg-white">
        <q-toolbar-title>
          <q-img
            src="../assets/logo.png"
            style="height: 60px; max-width: 150px"
            class="q-ml-xl"
          ></q-img>
        </q-toolbar-title>
        <div class="gt-sm">
          <q-tabs shrink>
            <q-tab
              v-scroll-to="{el: '#nosotros', duration:1500}"
              class="letras"
              name="tab1"
              label="Nosotros"
            ></q-tab>
            <q-tab
              v-scroll-to="{el: '#experiencia', duration:1500}"
              class="letras"
              name="tab2"
              label="Experiencia"
            ></q-tab>
            <q-tab
              v-scroll-to="{el: '#productos', duration:1500}"
              class="letras"
              name="tab3"
              label="Producto"
            ></q-tab>
            <q-tab
              v-scroll-to="{el: '#servicios', duration:1500}"
              class="letras"
              name="tab4"
              label="Servicios"
            ></q-tab>
            <q-tab
              v-scroll-to="{el: '#contacto', duration:1500}"
              class="letras"
              name="tab5"
              label="Contacto"
            ></q-tab>
          </q-tabs>
        </div>
        <div class="lt-md">
          <q-btn
            color="black"
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            icon="menu"
            aria-label="Menu"
          >
          </q-btn>
        </div>
      </q-toolbar>
      <q-drawer show-if-above  v-model="leftDrawerOpen" side="left" bordered content-class="bg-grey-1">
        <q-scroll-area
          style="
            height: calc(100% - 150px);
            margin-top: 50px;
            border-right: 1px solid #ddd;
            color: black;
          "
        >
          <q-list padding class="menu-list">
            <q-item
              clickable
              v-ripple
              v-scroll-to="'#nosotros'"
              @click="leftDrawerOpen = !leftDrawerOpen"
            >
              <q-item-section> Nostros </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              v-scroll-to="'#experiencia'"
              @click="leftDrawerOpen = !leftDrawerOpen"
            >
              <q-item-section> Experiencia </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              v-scroll-to="'#productos'"
              @click="leftDrawerOpen = !leftDrawerOpen"
            >
              <q-item-section> Producto </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              v-scroll-to="'#servicios'"
              @click="leftDrawerOpen = !leftDrawerOpen"
            >
              <q-item-section> Servicios </q-item-section>
            </q-item>
            <q-item
              clickable
              v-ripple
              v-scroll-to="'#contacto'"
              @click="leftDrawerOpen = !leftDrawerOpen"
            >
              <q-item-section> Contacto </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
      </q-drawer>
    </q-header>
    <q-page-container style="padding-left:0px;">
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>
<script>
import "../css/estilos.css";
import vueScrollto from "vue-scrollto";
import Vue from "vue";
Vue.use(vueScrollto);

export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
};
</script>
