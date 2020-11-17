<template>
  <div>
    <!--SLIDER-->
    <div>
      <q-carousel animated v-model="slide" navigation infinite class="carrusel">
        <q-carousel-slide :name="1" img-src="../assets/banPrin.png" />
        <q-carousel-slide :name="2" img-src="../assets/banPrin.png" />
        <q-carousel-slide :name="3" img-src="../assets/banPrin.png" />
        <q-carousel-slide :name="4" img-src="../assets/banPrin.png" />
      </q-carousel>
    </div>

    <!--ACERCA DE NOSOTROS-->
    <div class="row nosotros">
      <div class="col-12 col-md-4 offset-md-2">
        <h3>Acerca</h3>
        <h3>de nosotros</h3>
      </div>
      <div class="col-12 col-md-6">
        <p>Nos constituímos como una sociedad en 2016 con el propósito de</p>
        <p>
          ofrecer servicios especializados de
          <b>medios de pago, consultoría y</b>
        </p>
        <p><b>desarrollo de software.</b></p>

        <p>
          Contamos con <b>más de 25 años de experiencia laboral,</b> trabajando
        </p>
        <p>con Bancos, Instituciones Financieras y Fintechs, Nacionales e</p>
        <p>Internacionales</p>

        <p>
          Formamos un equipo <b>multidisciplinario</b> con experiencias en
          diversos
        </p>
        <p>ámbitos tales como Medios de pago, TI, Operaciones, Negociación y</p>
        <p>Relaciones entre participantes en el mercado mexicano</p>
      </div>
    </div>

    <!--NUESTROS CLIENTES-->
    <div class="row clientes q-pb-xl" id="#clientes">
      <div class="col-12 col-md-12">
        <h4>Nuestros clientes</h4>
        <img src="../assets/clientes.png" alt="" />
      </div>
    </div>

    <!-- AREAS DE EXPERIENCIA-->
    <div class="row imgExp">
      <div class="col-10 col-4-md" style="margin-top: 7%">
        <h3>Áreas de</h3>
        <h3>experiencia</h3>
      </div>
      <div class="col-10 col-4-md" style="margin-top: 6%">
        <h3>Somos expertos</h3>
      </div>
      <div class="q-mt-md q-mb-xl expAreas">
        <li>Integración a la banca mexicana para emisores / adquirentes</li>
        <li>Reglamentación local / ABM / Banxico</li>
        <li>
          Análisis y construcción de interfaces especialidades en la banca
        </li>
        <li>Cuota de intercambio</li>
        <li>Minería de datos y análisis transaccional</li>
        <br />
        <br />
      </div>
    </div>

    <!-- EXPERIENCIAS DIGITALES-->
    <div class="row clientes q-pb-xl">
      <div class="col-12 col-md-12 experiencias">
        <h4>Experiencias digitales e interactivas (UX/UI)</h4>
      </div>
      <div class="row">
        <div class="col-7 col-4-sm offset-md-2">
          <q-card flat bordered class="my-card">
            <q-card-section class="q-ml-md">
              <div class="text-h2 titulo q-mt-xl">
                Diseño de <br />
                experiencias
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none exp q-ml-md">
              <p>
                <b>
                  Evaluamos y analizamos las plataformas <br />
                  para asegurar una experiencia de <br />
                  navegación y funcionalidad centrada <br />
                  100% en las necesidades de los usuarios y <br />
                  la optimización de operaciones.
                </b>
              </p>
            </q-card-section>
            <q-card-section class="q-mb-md">
              <div class="expLista">
                <li class="q-ml-md">
                  <strong>Creación de plataformas</strong> amigables, <br />
                  modernas y disruptivas
                </li>
                <li class="q-ml-md">
                  <strong>Empleo de metodologías</strong> AGILE, CANVAS,<br />
                  SCRUM, Blue Ocean, Waterfall, UML, y más.
                </li>
                <li class="q-ml-md">
                  <strong>Análisis</strong> profundo sobre la competencia. el
                  <br />
                  mercado y los usuarios.
                </li>
                <li class="q-ml-md">
                  <strong>Establecimiento de directrices</strong> para
                  interfaces
                  <br />
                  gráficas.
                </li>
              </div>
            </q-card-section>
          </q-card>
        </div>
        <div class="col-3 col-4-sm">
          <q-card flat bordered class="my-card">
            <q-card-section class="q-ml-md">
              <div class="text-h2 titulo q-mt-xl">
                Diseño de <br />
                interfaces
              </div>
            </q-card-section>
            <q-card-section class="q-pt-none exp q-ml-md">
              <p>
                <b>
                  Creamos e implementamos pantallas que <br />
                  reflejan la identidad visual de la marca, las <br />
                  tendencias del mercado y un diseño <br />
                  visualmente atractivo.
                </b>
              </p>
            </q-card-section>
            <q-card-section class="q-mb-md q-mt-md">
              <div class="expLista q-mt-xl">
                <li class="q-ml-md">
                  Análisis y documentación de tendencias<br />
                  actuales
                </li>
                <li class="q-ml-md">
                  Propuestas responsivas y personalizadas <del></del><br />
                  retículas
                </li>
                <li class="q-ml-md">Prototipos de navegación funcional</li>
                <li class="q-ml-md">
                  Integración de pantallas a través de <br />
                  herramientas como Bootstrap, Semantic UI, y <br />
                  Materialize
                </li>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!--NUESTROS PRODUCTOS-->
    <div class="row productos">
      <h4>Nuestros productos</h4>
    </div>
    <div class="slider">
      <div class="q-pt-xl">
        <q-option-group
          v-model="navPos"
          :options="navigationPositions"
          color="purple"
          inline
          class="q-mb-md"
        />
        <q-carousel
          animated
          :navigation-position="navPos"
          v-model="slide"
          infinite
          control-color="black"
          class="carrusel2"
          navigation
        >
          <q-carousel-slide
            :name="1"
            img-src="../assets/PREAUTORIZADOR.png"
            class="carrusel2-img"
          />
          <q-carousel-slide
            :name="2"
            img-src="../assets/SISTEMA.png"
            class="carrusel2-img"
          />
          <q-carousel-slide :name="3" img-src="../assets/HUB.png" class="img" />
          <q-carousel-slide
            :name="4"
            img-src="../assets/SHIFT.png"
            class="carrusel2-img"
          />
          <q-carousel-slide
            :name="5"
            img-src="../assets/VISION.png"
            class="carrusel2-img"
          />
        </q-carousel>
      </div>
    </div>

    <!--NUESTROS SERVICIOS-->
    <div class="row productos">
      <h4>Nuestros servicios</h4>
    </div>
    <div class="container servicios">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-12 col-md-3 offset-md-2">
              <div class="nav" aria-orientation="vertical">
                <a href="">Consultoría</a>
                <a href="">Desarrollos</a>
                <a href="">Integración</a>
                <a href="">Back Office</a>
              </div>
            </div>
            <div class="col-1"></div>
            <div class="col-12 col-md-6">
              <div>
                <p>
                  Amplia experiencia en medios de pago y soluciones
                  tecnológicas, <br />
                  operativas y de negocio para la incorporación al mercado
                  mexicano e <br />
                  internacional. Ofrecemos productos y soluciones acordes a los
                  <br />
                  estándares y necesidades apoyados por análisis de Normativas,
                  <br />
                  auditorías PCI, recomendaciones para adecuación de procesos
                  con las <br />
                  marcas (VISA, MASTERCARD, AMEX). <br /><br />

                  Contamos con expertos que cuentan con más de
                  <strong
                    >25 años de <br />
                    experiencia en la industria</strong
                  >
                  de medios de pago. Es por eso que el <br />
                  enfoque en eXos está orientado a satisfacer las necesidades
                  logísticas, <br />
                  funcionales y tecnológicas del ámbito de medios de pago.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--PRODUCTOS-->
    <div class="row necesidades">
      <h4>
        Productos que se adaptan a las <br />
        necesidades de cada usuario
      </h4>
    </div>
    <div class="row unete">
      <img src="../assets/UNETE.png" alt="" />
    </div>

    <!--CONTACTO-->
    <div class="row contacto">
      <img src="../assets/CONTACTO.png" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
import "../css/estilos.css";
import "../js/app.js";
export default {
  name: "PageIndex",
  data() {
    return {
      slide: 1,
      navPos: "bottom",
      navigationPositions: [
        { value: "top", label: "top" },
        { value: "right", label: "right" },
        { value: "bottom", label: "bottom (default)" },
        { value: "left", label: "left" },
      ],
    };
  },
};
</script>
