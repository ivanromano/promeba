<template> 
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">PROMEBA</a>
    <button class="navbar-toggler" type="button" v-on:click="handleCollapse" aria-expanded="true" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button> 
    <div class="collapse navbar-collapse" :class="[showCategories ? ' show': 'hidden']" id="collapsibleNavbar">
      <ul class="navbar-nav" v-for="item in categorias">

        <li class="nav-item dropdown" v-if="es_desplegable(item) === true">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">{{ item.txt }}</a>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" v-for="hijo in item.hijos" :to=hijo.link >{{ hijo.txt }}</router-link></li>
          </ul>
        </li>

        <li class="nav-item dropdown"  v-else >
          <router-link class="nav-link" :to=item.link >{{ item.txt }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showCategories = ref<boolean>(false)

const handleCollapse = () => {
  showCategories.value = !showCategories.value
}


class Category {
  txt:string
  link:string
  constructor(txt:string, link:string) {
    this.txt = txt;
    this.link = link;
  }
}

class ParentCategory extends Category {
  hijos:object
  constructor(txt:string, link:string, hijos:object) {
    super(txt, link)
    this.hijos = hijos
  }
}

const categorias = {
  index: new Category("inicio", "/"),
  quienesSomos: new ParentCategory("Quienes Somos", "#", {
    nuestroEquipo: new Category("Nuestro Equipo", "/nuestroequipo"),
    // localizacion: new Category("localizacion", "/localizacion")
  }),
  contactos: new Category("Contactos", "/contactos"),
}

const es_desplegable = (item:object):boolean => {
  return item instanceof(ParentCategory)
}
</script>