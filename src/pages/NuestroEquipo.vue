<template>
<div class="container mt-3">
  <h2>Lista de Trabajadores</h2>
  <!-- <p></p>             -->
  <table class="table table-dark">
    <thead>
      <tr>
        <th>nombre</th>
        <th>puesto</th>
      </tr>
    </thead>
    <tbody> 
        <tr v-for="item in cargos">
            <td>{{ item.nombre }}</td>
            <td>{{ item.cargo }}</td>
        </tr>
    </tbody>
  </table>
</div>
</template>


<script setup lang="ts"> 

const cargos:object = {
    Jose_Ignacio: { nombre: "José Ignacio Giraudo", cargo: "Presidente" },
    Carlos_Hugo: { nombre: "Carlos Hugo Rodríguez", cargo: "Secretario" },
    Maria_Constanza: { nombre: "María Constanza Ledesma", cargo: "Tesorera" },
    Marcela_Guerra: { nombre: "Marcela Guerra", cargo: "Vocal" },
    Carlos_Chaves: { nombre: "Carlos Chaves", cargo: "Vocal" },
    Dario_Iacovello: { nombre: "Darío Iacovello", cargo: "Vocal Suplente" },
    Maria_Cecilia: { nombre: "María Cecilia Mariluz", cargo: "Revisora Fiscal" },
    Pablo_Feresini: { nombre: "Pablo Feresini", cargo: "Revisor Fiscal Suplente" },
    Felix_Cirio: { nombre: "Félix Cirio", cargo: "Revisor Fiscal Suplente" },
    Alejandro_Madero: { nombre: "Alejandro Madero", cargo: "Revisor Fiscal Suplente" },
    Monica_Gallegos: { nombre: "Mónica Gallegos", cargo: "Responsable de Incidencia" },
    Veronica_Law_Makita: { nombre: "Verónica Law Makita", cargo: "Coordinadora de Administración" },
    Maximiliano_Pereyra: { nombre: "Maximiliano Pereyra", cargo: "Coordinador de Finanzas" }
};



</script>