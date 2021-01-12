<template>
  <div>
    <!-- CARRUSEL-->
    <div class="gt-sm" style="height: 100vh">
      <q-responsive :ratio="16 / 9" style="width: 100%; max-width: 100%">
        <q-carousel
          swipeable
          animated
          navigation
          v-model="slide"
          infinite
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide :name="1" img-src="../assets/banPrin.png" />
          <q-carousel-slide :name="2" img-src="../assets/banPrin.png" />
          <q-carousel-slide :name="3" img-src="../assets/banPrin.png" />
          <q-carousel-slide :name="4" img-src="../assets/banPrin.png" />
        </q-carousel>
      </q-responsive>
    </div>
    <div class="lt-md">
      <q-responsive :ratio="16 / 9" style="width: 100%; max-width: 100%">
        <q-carousel
          swipeable
          animated
          navigation
          v-model="slide"
          infinite
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide :name="1" img-src="../assets/banPrin.png" />
          <q-carousel-slide :name="2" img-src="../assets/banPrin.png" />
          <q-carousel-slide :name="3" img-src="../assets/banPrin.png" />
          <q-carousel-slide :name="4" img-src="../assets/banPrin.png" />
        </q-carousel>
      </q-responsive>
    </div>
    <!--ACERCA DE NOSOTROS-->
    <div class="nosotros gt-sm" id="nosotros" style="height: 100vh">
      <div class="row">
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
            Contamos con
            <b>más de 25 años de experiencia laboral,</b> trabajando
          </p>
          <p>con Bancos, Instituciones Financieras y Fintechs, Nacionales e</p>
          <p>Internacionales</p>

          <p>
            Formamos un equipo <b>multidisciplinario</b> con experiencias en
            diversos
          </p>
          <p>
            ámbitos tales como Medios de pago, TI, Operaciones, Negociación y
          </p>
          <p>Relaciones entre participantes en el mercado mexicano</p>
        </div>
      </div>
      <div class="lt-md q-pl-xl">
        <div class="col-12">
          <h3 style="margin-bottom: -35px">Acerca</h3>
          <h3>de nosotros</h3>
        </div>
        <div class="col-12">
          <p>
            Nos constituímos como una sociedad en 2016 con el propósito de
            ofrecer servicios
          </p>
          <p>
            especializados de
            <b>medios de pago, consultoría y <b>desarrollo de software.</b></b>
          </p>

          <p>
            Contamos con
            <b>más de 25 años de experiencia laboral,</b> trabajando con
          </p>
          <p>
            Bancos, Instituciones Financieras y Fintechs, Nacionales e
            Internacionales.
          </p>
          <p>
            Formamos un equipo <b>multidisciplinario</b> con experiencias en
            diversos ámbitos tales como
          </p>
          <p>Medios de pago, TI, Operaciones, Negociación y Relaciones entre</p>
          <p>participantes en el mercado mexicano.</p>
        </div>
      </div>
    </div>
    <div class="nosotros lt-md" id="nosotros" style="padding: 60px 0 40px 0">
      <div class="row gt-sm">
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
            Contamos con
            <b>más de 25 años de experiencia laboral,</b> trabajando
          </p>
          <p>con Bancos, Instituciones Financieras y Fintechs, Nacionales e</p>
          <p>Internacionales</p>

          <p>
            Formamos un equipo <b>multidisciplinario</b> con experiencias en
            diversos
          </p>
          <p>
            ámbitos tales como Medios de pago, TI, Operaciones, Negociación y
          </p>
          <p>Relaciones entre participantes en el mercado mexicano</p>
        </div>
      </div>
      <div class="lt-md q-pl-xl">
        <div class="col-12">
          <h3 style="margin-bottom: -35px">Acerca</h3>
          <h3>de nosotros</h3>
        </div>
        <div class="col-12">
          <p>
            Nos constituímos como una sociedad en 2016 con el propósito de
            ofrecer servicios
          </p>
          <p>
            especializados de
            <b>medios de pago, consultoría y <b>desarrollo de software.</b></b>
          </p>

          <p>
            Contamos con
            <b>más de 25 años de experiencia laboral,</b> trabajando con
          </p>
          <p>
            Bancos, Instituciones Financieras y Fintechs, Nacionales e
            Internacionales.
          </p>
          <p>
            Formamos un equipo <b>multidisciplinario</b> con experiencias en
            diversos ámbitos tales como
          </p>
          <p>Medios de pago, TI, Operaciones, Negociación y Relaciones entre</p>
          <p>participantes en el mercado mexicano.</p>
        </div>
      </div>
    </div>
    <!--NUESTROS CLIENTES-->
    <div style="justify-content: center; height: 100vh" class="clientes gt-sm ">
      <div class="row q-pb-sm" id="#clientes">
        <div class="col-12 col-md-12 q-mt-xl">
          <h4>Nuestros clientes</h4>
        </div>
      </div>
      <div class="row clientes q-pr-sm q-mt-xl" style="justify-content: center">
        <div class="col-2 q-ml-xl">
          <q-img src="../assets/eglobal.png" alt="" />
        </div>
        <div class="col-2 q-ml-xl">
          <q-img src="../assets/mastercard.png" alt="" />
        </div>
        <div class="col-2 q-ml-xl">
          <q-img src="../assets/prosa.png" alt="" />
        </div>
      </div>
      <div class="row clientes q-pr-sm q-mt-xl" style="justify-content: center">
        <div class="col-1 q-ml-xl q-mb-xl">
          <q-img src="../assets/sodexo.png" alt="" />
        </div>
        <div class="col-2 q-ml-xl q-mb-xl">
          <q-img src="../assets/broxel.png" alt="" />
        </div>
        <div class="col-1 q-ml-xl q-mb-xl">
          <q-img src="../assets/ACI.png" alt="" />
        </div>
      </div>
    </div>
    <div style="justify-content: center" class="clientes lt-md">
      <div class="row q-pb-sm" id="#clientes">
        <div class="col-12 col-md-12">
          <h4>Nuestros clientes</h4>
        </div>
      </div>
      <div class="row clientes q-pr-sm" style="justify-content: center">
        <div class="col-2 q-ml-xl">
          <q-img src="../assets/eglobal.png" alt="" />
        </div>
        <div class="col-2 q-ml-xl">
          <q-img src="../assets/mastercard.png" alt="" />
        </div>
        <div class="col-2 q-ml-xl">
          <q-img src="../assets/prosa.png" alt="" />
        </div>
      </div>
      <div class="row clientes q-pr-sm" style="justify-content: center">
        <div class="col-1 q-ml-xl q-mb-xl">
          <q-img src="../assets/sodexo.png" alt="" />
        </div>
        <div class="col-2 q-ml-xl q-mb-xl">
          <q-img src="../assets/broxel.png" alt="" />
        </div>
        <div class="col-1 q-ml-xl q-mb-xl">
          <q-img src="../assets/ACI.png" alt="" />
        </div>
      </div>
    </div>
    <!-- AREAS DE EXPERIENCIA-->
    <div class="row gt-sm imgExp" id="experiencia" style="height: 100vh">
      <div class="col-10 col-4-md" style="margin-top: 3%">
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
    <div class="row lt-md imgExp2" id="experiencia">
      <div class="col-10 col-4-md" style="margin-top: 7%; margin-left: 7%">
        <h3 style="margin-bottom: -40px">Áreas de</h3>
        <h3>experiencia</h3>
      </div>
      <div class="col-10 col-4-md" style="margin-top: 6%; margin-left: 7%">
        <h3>Somos expertos</h3>
      </div>
      <div class="expAreas2 q-mt-md q-mb-xl">
        <ul>
          <li>
            Integración a la banca mexicana para emisores <br />
            / adquirentes
          </li>
          <li>Reglamentación local / ABM / Banxico</li>
          <li>
            Análisis y construcción de interfaces especialidades en la banca
          </li>
          <li>Cuota de intercambio</li>
          <li>Minería de datos y análisis transaccional</li>
        </ul>
        <br />
        <br />
      </div>
    </div>

    <!-- EXPERIENCIAS DIGITALES-->
    <div class="q-pa-md clientes">
      <div class="col-12 experiencias">
        <h4>Experiencias digitales e interactivas (UX/UI)</h4>
      </div>
      <div class="row q-gutter-xl q-mb-xl" style="justify-content: center">
        <q-card flat bordered class="column my-card">
          <q-card-section class="q-ml-md">
            <div class="titulo q-mt-xl" style="margin-bottom: 40px">
              <h2>
                Diseño de <br />
                experiencia
              </h2>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none exp q-ml-md">
            <div style="margin-bottom: -20px">
              <p>
                <b>
                  Evaluamos y analizamos las plataformas <br />
                  para asegurar una experiencia de <br />
                  navegación y funcionalidad centrada <br />
                  100% en las necesidades de los usuarios y <br />
                  la optimización de operaciones.
                </b>
              </p>
            </div>
          </q-card-section>
          <q-card-section class="q-mb-md">
            <div class="expLista">
              <div>
                <ul>
                  <li >
                    <strong>Creación de plataformas</strong> amigables, <br />
                    modernas y disruptivas
                  </li>
                  <li >
                    <strong>Empleo de metodologías</strong> AGILE, CANVAS,<br />
                    SCRUM, Blue Ocean, Waterfall, UML, y más.
                  </li>
                  <li >
                    <strong>Análisis</strong> profundo sobre la competencia. el
                    <br />
                    mercado y los usuarios.
                  </li>
                  <li >
                    <strong>Establecimiento de directrices</strong> para
                    interfaces
                    <br />
                    gráficas.
                  </li>
                </ul>
              </div>
            </div>
          </q-card-section>
        </q-card>
        <q-card flat bordered class="column my-card">
          <q-card-section class="q-ml-md">
            <div class="titulo q-mt-xl" style="margin-bottom: 40px">
              <h2>
                Diseño de <br />
                interfaces
              </h2>
            </div>
          </q-card-section>
          <q-card-section class="q-pt-none exp q-ml-md">
            <div style="margin-bottom: -20px">
              <p>
                <b>
                  Creamos e implementamos ‎‎‎‎‎‎‎‎‎pantallas que <br />
                  reflejan la identidad visual de la marca, las <br />
                  tendencias del mercado y un diseño <br />
                  visualmente atractivo.
                </b>
              </p>
            </div>
          </q-card-section>
          <q-card-section class="q-mb-md">
            <div class="expLista">
              <div>
                <ul>
                  <li >
                    Análisis y documentación de tendencias<br />
                    actuales
                  </li>
                  <li >
                    Propuestas responsivas y personalizadas <del></del><br />
                    retículas
                  </li>
                  <li>Prototipos de navegación funcional</li>
                  <li>
                    Integración de pantallas a través de <br />
                    herramientas como Bootstrap, Semantic UI, y <br />
                    Materialize
                  </li>
                </ul>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!--NUESTROS PRODUCTOS-->
    <div class="row productos" id="productos">
      <h4>Nuestros productos</h4>
    </div>
    <div class="gt-sm slider q-pt-xl q-pb-xl" >
       <q-responsive :ratio="10 / 8" class="q-ml-xl" style="width: 85%; max-width: 100%;">
        <q-carousel
          ref="carousel"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          swipeable
          infinite
          v-model="slide"
          infinitea
          arrows
          control-color="black"
          class="shadow-6 carrusel"
        >
          <q-carousel-slide :name="1" img-src="../assets/PREAUTORIZADOR.png" />
          <q-carousel-slide :name="2" img-src="../assets/SISTEMA.png" />
          <q-carousel-slide :name="3" img-src="../assets/HUB.png" />
          <q-carousel-slide :name="4" img-src="../assets/SHIFT.png" />
          <q-carousel-slide :name="5" img-src="../assets/VISION.png" />
        </q-carousel>
      </q-responsive>
    </div>
    <div class="lt-md">
      <q-responsive :ratio="15 / 11 " style="width: 100%; max-width: 100%" >
        <q-carousel
          swipeable
          animated
          navigation
          v-model="slide"
          infinite
          transition-prev="slide-right"
          transition-next="slide-left"
          control-color="black"
        >
          <q-carousel-slide :name="1" img-src="../assets/PREAUTORIZADOR.png" />
          <q-carousel-slide :name="2" img-src="../assets/SISTEMA.png" />
          <q-carousel-slide :name="3" img-src="../assets/HUB.png" />
          <q-carousel-slide :name="4" img-src="../assets/SHIFT.png" />
          <q-carousel-slide :name="5" img-src="../assets/VISION.png" />
        </q-carousel>
      </q-responsive>
    </div>

    <!--NUESTROS SERVICIOS-->
    <div class="row productos" id="servicios">
      <h4>Nuestros servicios</h4>
    </div>
    <div class="row q-pa-xl servicios">
      <div class="col-12 col-xs-4 gt-sm">
        <template>
          <q-tabs
            v-model="tab"
            indicator-color="transparent"
            vertical
            class="float-left"
          >
            <q-tab
              class="border-servicios"
              name="consultoria"
              label="Consultoría"
            />
            <q-tab
              class="border-servicios"
              name="desarrollos"
              label="Desarrollos"
            />
            <q-tab
              class="border-servicios"
              name="integracion"
              label="Integración"
            />
            <q-tab
              class="border-servicios"
              name="backoffice"
              label="Back Office"
            />
          </q-tabs>
        </template>
        <div>
          <template>
            <q-tab-panels
              v-model="tab"
              animated
              swipeable
              vertical
              transition-prev="jump-down"
              transition-next="jump-up"
              class="color-servicios"
            >
              <q-tab-panel name="consultoria">
                <p>
                  Amplia experiencia en medios de pago y soluciones
                  tecnológicas,
                </p>
                <p>
                  operativas y de negocio para la incorporación al mercado
                  mexicano e
                </p>
                <p>
                  internacional. Ofrecemos productos y soluciones acordes a los
                </p>
                <p>
                  estándares y necesidades apoyados por análisis de Normativas,
                </p>
                <p>
                  auditorías PCI, recomendaciones para adecuación de procesos
                  con las
                </p>
                <p>marcas (VISA, MASTERCARD, AMEX).</p>
                <br />

                <p>
                  Contamos con expertos que cuenta con más de
                  <strong>25 años de</strong>
                </p>
                <p>
                  <strong>experiencia en la industria</strong> de medios de
                  pago. Es por eso que el
                </p>
                <p>
                  enfoque en eXos está orientado a satisfacer las necesidades
                  logísticas,
                </p>
                <p>funcionales y tecnológicas del ámbito de medios de pago.</p>
              </q-tab-panel>

              <q-tab-panel name="desarrollos">
                <p>
                  Somos expertos en Proyectos de Desarrollo de Software basados
                  en
                </p>
                <p>
                  las especificaciones de nuestros clientes, y gracias a nuestra
                </p>
                <p>
                  experiencia acumulada desde hace mas de 25 años en la
                  industria de
                </p>
                <p>
                  medios de pago entregamos al cliente Software, sin defectos,
                </p>
                <p>
                  proyectos a tiempo y la mejor relación de costo-beneficio. A
                  través de
                </p>
                <p>
                  nuestra metodología apoyamos a nuestros clientes a incrementar
                  su
                </p>
                <p>
                  capacidad de producción de proyectos de desarrollo
                  permitiéndoles
                </p>
                <p>concentrarse en el core de su negocio.</p>

                <p>
                  Dominamos el desarrollo de aplicaciones en JAVA, .NET,
                  Aplicaciones
                </p>
                <p>Móviles y tecnologías emergentes.</p>
              </q-tab-panel>

              <q-tab-panel name="integracion">
                <p>
                  Las nuevas tecnologías continúan revolucionando el sector
                  bancario.
                </p>
                <p>
                  Los nuevos participantes en el mercado digital incrementan la
                </p>
                <p>
                  competencia en mercados ya saturados. Los clientes esperan
                  obtener
                </p>
                <p>
                  servicios en línea innovadores pero también de la mano con los
                </p>
                <p>
                  productos existentes y en el marco de las normativas actuales.
                </p>
                <p>
                  Integramos productos y desarrollos inmersos en la operación
                  actual
                </p>
                <p>
                  normada con énfasis en mejorar la experiencia del cliente y
                </p>
                <p>optimización de la interacción entre plataformas.</p>
              </q-tab-panel>

              <q-tab-panel name="backoffice">
                <p>
                  En un contexto cada vez más competitivo y complicado como el
                  actual,
                </p>
                <p>
                  las empresas aprovechan todos los recursos posibles para
                  disminuir
                </p>
                <p>
                  costos, mejorar la organización interna y ofrecer un servicio
                  basado en
                </p>
                <p>
                  la excelencia. Un ejemplo concreto de esta realidad es
                  <strong>Back Office</strong>, un
                </p>
                <p>
                  conjunto de tareas que engloba una serie de actividades de
                  carácter
                </p>
                <p>
                  operativo y administrativo y que son imprescindibles para
                  asegurar el
                </p>
                <p>correcto funcionamiento de la corporación.</p>
                <br />

                <p>
                  Ofrecemos servicios de gestión que ayudan a mejorar la
                  productividad
                </p>
                <p>
                  de las empresas optimizando al máximo los recursos disponibles
                  con la
                </p>
                <p>ayuda de personal altamente capacitado y con herramientas</p>
                <p>
                  tecnológicas que permiten monitorear, controlar y asegurar la
                </p>
                <p>estabilidad de las operaciones.</p>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </div>
      </div>
      <div class="col-12 lt-md">
        <template>
          <q-tabs
            v-model="tab"
            indicator-color="transparent"
            vertical
            style="margin-left: -20%"
          >
            <q-tab
              class="border-servicios"
              name="consultoria"
              label="Consultoría"
            />
            <q-tab
              class="border-servicios"
              name="desarrollos"
              label="Desarrollos"
            />
            <q-tab
              class="border-servicios"
              name="integracion"
              label="Integración"
            />
            <q-tab
              class="border-servicios"
              name="backoffice"
              label="Back Office"
            />
          </q-tabs>
        </template>
      </div>
      <div class="col-12 lt-md q-mt-xl">
        <div style="margin-left: -25%">
          <template>
            <q-tab-panels
              v-model="tab"
              animated
              swipeable
              vertical
              transition-prev="jump-down"
              transition-next="jump-up"
              class="color-servicios"
            >
              <q-tab-panel name="consultoria">
                <p>
                  Amplia experiencia en medios de pago y soluciones
                  tecnológicas,
                </p>
                <p>
                  operativas y de negocio para la incorporación al mercado
                  mexicano e
                </p>
                <p>
                  internacional. Ofrecemos productos y soluciones acordes a los
                </p>
                <p>
                  estándares y necesidades apoyados por análisis de Normativas,
                </p>
                <p>
                  auditorías PCI, recomendaciones para adecuación de procesos
                  con las
                </p>
                <p>marcas (VISA, MASTERCARD, AMEX).</p>
                <br />

                <p>
                  Contamos con expertos que cuenta con más de
                  <strong>25 años de</strong>
                </p>
                <p>
                  <strong>experiencia en la industria</strong> de medios de
                  pago. Es por eso que el
                </p>
                <p>
                  enfoque en eXos está orientado a satisfacer las necesidades
                  logísticas,
                </p>
                <p>funcionales y tecnológicas del ámbito de medios de pago.</p>
              </q-tab-panel>

              <q-tab-panel name="desarrollos">
                <p>
                  Somos expertos en Proyectos de Desarrollo de Software basados
                  en
                </p>
                <p>
                  las especificaciones de nuestros clientes, y gracias a nuestra
                </p>
                <p>
                  experiencia acumulada desde hace mas de 25 años en la
                  industria de
                </p>
                <p>
                  medios de pago entregamos al cliente Software, sin defectos,
                </p>
                <p>
                  proyectos a tiempo y la mejor relación de costo-beneficio. A
                  través de
                </p>
                <p>
                  nuestra metodología apoyamos a nuestros clientes a incrementar
                  su
                </p>
                <p>
                  capacidad de producción de proyectos de desarrollo
                  permitiéndoles
                </p>
                <p>concentrarse en el core de su negocio.</p>

                <p>
                  Dominamos el desarrollo de aplicaciones en JAVA, .NET,
                  Aplicaciones
                </p>
                <p>Móviles y tecnologías emergentes.</p>
              </q-tab-panel>

              <q-tab-panel name="integracion">
                <p>
                  Las nuevas tecnologías continúan revolucionando el sector
                  bancario.
                </p>
                <p>
                  Los nuevos participantes en el mercado digital incrementan la
                </p>
                <p>
                  competencia en mercados ya saturados. Los clientes esperan
                  obtener
                </p>
                <p>
                  servicios en línea innovadores pero también de la mano con los
                </p>
                <p>
                  productos existentes y en el marco de las normativas actuales.
                </p>
                <p>
                  Integramos productos y desarrollos inmersos en la operación
                  actual
                </p>
                <p>
                  normada con énfasis en mejorar la experiencia del cliente y
                </p>
                <p>optimización de la interacción entre plataformas.</p>
              </q-tab-panel>

              <q-tab-panel name="backoffice">
                <p>
                  En un contexto cada vez más competitivo y complicado como el
                  actual,
                </p>
                <p>
                  las empresas aprovechan todos los recursos posibles para
                  disminuir
                </p>
                <p>
                  costos, mejorar la organización interna y ofrecer un servicio
                  basado en
                </p>
                <p>
                  la excelencia. Un ejemplo concreto de esta realidad es
                  <strong>Back Office</strong>, un
                </p>
                <p>
                  conjunto de tareas que engloba una serie de actividades de
                  carácter
                </p>
                <p>
                  operativo y administrativo y que son imprescindibles para
                  asegurar el
                </p>
                <p>correcto funcionamiento de la corporación.</p>
                <br />

                <p>
                  Ofrecemos servicios de gestión que ayudan a mejorar la
                  productividad
                </p>
                <p>
                  de las empresas optimizando al máximo los recursos disponibles
                  con la
                </p>
                <p>ayuda de personal altamente capacitado y con herramientas</p>
                <p>
                  tecnológicas que permiten monitorear, controlar y asegurar la
                </p>
                <p>estabilidad de las operaciones.</p>
              </q-tab-panel>
            </q-tab-panels>
          </template>
        </div>
      </div>
    </div>

    <q-page-scroller
      position="bottom-right"
      :scroll-offset="500"
      :offset="[18, 18]"
      :duration="1000"
    >
      <q-btn
        fab
        icon="keyboard_arrow_up"
        style="background-color: #ff0063; color: white"
      ></q-btn>
    </q-page-scroller>

    <!--PRODUCTOS-->
    <div class="row productos">
      <h4>
        Productos que se adaptan a las<br />
        necesidades de cada usuario
      </h4>
    </div>

    <div class="row unete">
      <img src="../assets/UNETE.png" class="col-12" />
    </div>

    <!--CONTACTO-->
    <div class="row contacto" id="contacto">
      <q-img src="../assets/CONTACTO.png" class="col-2" />
    </div>
  </div>
</template>

<script>
import "../css/estilos.css";
export default {
  name: "PageIndex",
  data() {
    return {
      slide: 1,
      tab: "consultoria",
      splitterModel: 20,
    };
  },
};
</script>
