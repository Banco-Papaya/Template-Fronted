<template>
  <v-app class="text-center">
    <section class="imageBackground h-100">
      <v-main>
        <v-container>
          <slot />
        </v-container>
      </v-main>
      <v-footer
        class="text-center d-flex flex-column text-white"
        padless
        color="transparent"
      >
        <v-container>
          <v-col xs="4" lg="6">
            <section>
              Bucaramanga (57) 60 7 697 25 25 - Pereira (57) 60 6 340 12 13 - El
              resto del país 018000 9 12345. Sucursales Telefónicas en el
              exterior: España (34) 900 995 717 - Estados Unidos (1) 866 379 97
              14.
            </section>
            <section>
              &copy; {{ new Date().getFullYear() }} —
              <strong>Banco Papaya</strong>
            </section>
          </v-col>
          <v-col lg="6"> </v-col>
        </v-container>
      </v-footer>
    </section>
  </v-app>
</template>
<style>
.imageBackground {
  background-image: url("/images/svg/curvas3.svg");
  background-repeat: no-repeat;
  background-position: left;
  background-size: contain, cover;
  margin-top: auto;
  padding-top: 120px;
}
</style>