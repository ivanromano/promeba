<template>
 <div class="container">
    <h2 class="mt-5">Formulario de Contacto</h2>

    <form>
    <div class="form-outline w-25">
        <label class="form-label">email:</label>
        <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre" required />
    </div>

    <div class="form-outline w-25">
        <label class="form-label">contraseña:</label>
        <input type="password" class="form-control" id="contraseña" placeholder="Ingrese su contraseña" required />
    </div>

      <div class="form-group">
        <label for="mensaje">Mensaje:</label>
        <textarea class="form-control" id="mensaje" rows="5" placeholder="Ingrese su mensaje" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
    </form>
  </div>

</template>
<!-- <template>
  <div class="container">
    <h2 class="mt-5">Formulario de Contacto</h2>

    <form>
      <div class="form-group row">
        <label for="nombre">nombre:</label>
        <input type="text" class="form-control custom-input" id="nombre" placeholder="Ingrese su nombre" required>
      </div>

      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" class="form-control col-sm-6" id="email" placeholder="Ingrese su correo electrónico" required>
      </div>

      <div class="form-group">
        <label for="mensaje">Mensaje:</label>
        <textarea class="form-control" id="mensaje" rows="5" placeholder="Ingrese su mensaje" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
    </form>
  </div>
</template> -->