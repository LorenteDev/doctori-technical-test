<template>
  <form
    id="form"
    v-on:submit.prevent="send()">
    <h2>Tu seguro de coche al mejor precio</h2>
    <h3>Buscamos por ti entre los mejores seguros y servicios</h3>
    <div>
      <div>
        <input
          type="text"
          placeholder="Nombre"
          required
          v-model="form.name">
        <input
          type="tel"
          placeholder="Teléfono"
          pattern="(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}"
          required
          v-model="form.phone">
      </div>
      <div>
        <input
          type="email"
          placeholder="Email"
          required
          v-model="form.email">
        <select
          placeholder="Marca de tu coche"
          required
          v-model="form.brand">
          <option
            value=""
            disabled
            selected
            hidden>Marca de tu coche</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
    <label>
      <input
        type="checkbox"
        required
        v-model="form.termsAccepted">
      <p>
        Tus datos son tratados por iSalud para prestarte los <a href="#">servicios</a> de búsqueda solicitados, <b>consistentes en</b> realizar acciones comerciales <b>en nombre propio</b> y en nombre las <a href="#">entidades aseguradoras</a> y de las entidades de prestación de servicio con las que iSalud colabora, <b>sea de</b> productos propios y/o de terceros y/o para mediar en la oferta y contratación de seguros. Puedes consultar la información ampliada sobre el tratamiento de tus datos y cómo ejercer tus derechos en la <a href="#">Política de Privacidad</a>
      </p>
    </label>
    <button>
      Buscar
    </button>
  </form>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    form: {
      name: '',
      phone: '',
      email: '',
      brand: '',
      termsAccepted: false
    }
  }),
  methods: {
    send () {
      console.log(this.form)
    }
  }
}
</script>

<style scoped>
#form {
  background: #0098d9;
  color: white;
}
a {
  color: white;
}
</style>