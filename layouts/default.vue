<template>
  <v-app>
    <v-system-bar height="36" color="grey-darken-4">
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-toolbar prepend color="grey-darken-4" height="36">
              <NuxtLink
                to="/people"
                class="p-2 hover:bg-white hover:text-black font-OpenSans-Regular"
              >
                Personas
              </NuxtLink>
              <NuxtLink
                to="/business"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular"
                >Negocios</NuxtLink
              >
              <NuxtLink
                to="/corporative"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular"
                >Corporativo</NuxtLink
              >
              <NuxtLink
                to="/specialbusiness"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular"
                >Negocios especializados</NuxtLink
              >
              <NuxtLink
                to="/360"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular"
                >Tu 360</NuxtLink
              >
            </v-toolbar>
          </v-col>
          <v-col cols="4">
            <v-toolbar append color="grey-darken-4" height="36">
              <NuxtLink
                to="/transparency"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular"
                >Transparencia</NuxtLink
              >
              <NuxtLink
                to="/consumer"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular"
                >Consumidor</NuxtLink
              >
              <NuxtLink
                to="/requestdocuments"
                class="p-2 hover:bg-white hover:text-black font-medium font-OpenSans-Regular"
                >Solicita Documentos</NuxtLink
              >
            </v-toolbar>
          </v-col>
        </v-row>
      </v-container>
    </v-system-bar>
    <v-toolbar color="white" height="90" flat class="mt-9">
      <v-container>
        <v-row>
          <v-col cols="3">
            <v-toolbar prepend color="white">
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
            <v-toolbar append color="white">
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
            <CardLogin></CardLogin>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar>
    <main class="bg-stone-100">
      <v-container>
        <slot />
      </v-container>
    </main>
    <footer>
      <section class="max-w-full flex justify-center">
        <section class="grid gap-4 grid-cols-5"></section>
      </section>
      <section class="max-w-full flex justify-center">
        <section class="flex justify-start w-4/12 p-5">
          <nuxt-img
            preload
            src="/banco-papaya.jpg"
            height="58"
            loading="lazy"
          />
        </section>
        <section class="flex justify-end w-5/12 p-5">
          &copy; Copyright 2023 | Banco Papaya
        </section>
      </section>
    </footer>
  </v-app>
</template>
<link rel="stylesheet" href="~/assets/css/default.css">