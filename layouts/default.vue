<template>
  <v-app>
    <v-system-bar height="36" color="grey-darken-4">
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-toolbar color="grey-darken-4" height="36">
              <NuxtLink
                to="/people"
                class="p-2 hover:bg-white hover:text-black font-OpenSans-Regular text-sm"
              >
                Personas
              </NuxtLink>
              <NuxtLink
                to="/business"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular text-sm"
                >Negocios</NuxtLink
              >
              <NuxtLink
                to="/corporative"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular text-sm"
                >Corporativo</NuxtLink
              >
              <NuxtLink
                to="/specialbusiness"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular text-sm"
                >Negocios especializados</NuxtLink
              >
              <NuxtLink
                to="/360"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular text-sm"
                >Tu 360</NuxtLink
              >
            </v-toolbar>
          </v-col>
          <v-col cols="4">
            <v-toolbar color="grey-darken-4" height="36">
              <NuxtLink
                to="/transparency"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular text-sm"
                >Transparencia</NuxtLink
              >
              <NuxtLink
                to="/consumer"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular text-sm"
                >Consumidor</NuxtLink
              >
              <NuxtLink
                to="/requestdocuments"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular text-sm"
                >Solicita Documentos</NuxtLink
              >
            </v-toolbar>
          </v-col>
        </v-row>
      </v-container>
    </v-system-bar>
    <v-app-bar :elevation="2">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-toolbar color="white">
              <NuxtLink to="/" class="d-inline pa-2">
                <nuxt-img
                  preload
                  src="/banco-papaya.jpg"
                  height="58"
                  loading="lazy"
                />
              </NuxtLink>
            </v-toolbar>
          </v-col>
          <v-col cols="6">
            <v-toolbar color="white">
              <v-btn variant="plain" class="text-capitalize text-body-2" to="/">
                Inicio
              </v-btn>
              <v-btn variant="plain" class="text-capitalize text-body-2" to="/">
                Necesidades
              </v-btn>
              <v-btn variant="plain" class="text-capitalize text-body-2" to="/">
                Productos y Servicios
              </v-btn>
              <v-btn variant="plain" class="text-capitalize text-body-2" to="/">
                Educación Financiera
              </v-btn>
            </v-toolbar>
          </v-col>
          <v-col cols="3">
            <btn-login></btn-login>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main class="bg-stone-100">
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <v-footer padless>
      <v-col class="text-center" cols="12">
        &copy; {{ new Date().getFullYear() }} — <strong>Banco Papaya</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>