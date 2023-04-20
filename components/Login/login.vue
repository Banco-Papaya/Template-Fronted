<template>
  <v-row class="align-center mt-16">
    <v-col xs="4" lg="6">
      <v-responsive class="mx-auto" max-width="344">
        <v-form class="pb-5" fast-fail @submit.prevent>
          <v-text-field
            v-model="documento"
            label="documento"
            clearable
            bg-color="white"
            hint="Introduzca su usuario para acceder a este sitio web"
            class="text-white"
            variant="solo"
            prepend-inner-icon="mdi-account"
          ></v-text-field>
          <v-text-field
            v-model="clave"
            label="clave"
            clearable
            bg-color="white"
            hint="Introduzca su clave para acceder a este sitio web"
            class="text-white mt-2"
            variant="solo"
            prepend-inner-icon="mdi-lock"
            :type="show1 ? 'text' : 'password'"
            :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append-inner="show1 = !show1"
          ></v-text-field>
          <v-btn type="submit" block class="mt-2">Ingresar</v-btn>
        </v-form>
        <v-btn
          variant="plain"
          density="comfortable"
          block
          class="text-capitalize text-body-2 text-white"
          to="/forgotpassword"
        >
          ¿Olvidaste la clave?
        </v-btn>
        <v-btn
          variant="plain"
          density="comfortable"
          block
          class="text-capitalize text-body-2 text-white"
          to="/help"
        >
          Ayuda
        </v-btn>
      </v-responsive>
    </v-col>
    <v-col lg="6">
      <v-responsive class="mx-auto" max-width="344">
        <nuxt-img
          preload
          src="/images/svg/reconocimientoicon.svg"
          height="58"
          loading="lazy"
        />
      </v-responsive>
    </v-col>
  </v-row>
</template>
<script src="./login.inf.js"></script>