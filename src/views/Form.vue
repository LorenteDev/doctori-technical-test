<template>
  <section id="form-container">
    <section id="form">
      <h1>Tu seguro de coche al mejor precio</h1>
      <h2>Buscamos por ti entre los mejores seguros y servicios</h2>
      <form v-on:submit.prevent="send()">
        <div class="input-container">
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
        <div class="input-container">
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
        <div id="terms">
          <input
            type="checkbox"
            required
            v-model="form.termsAccepted">
          <p>
            Tus datos son tratados por iSalud para prestarte los <a href="#">servicios</a> de búsqueda solicitados, <b>consistentes en</b> realizar acciones comerciales <b>en nombre propio</b> y en nombre las <a href="#">entidades aseguradoras</a> y de las entidades de prestación de servicio con las que iSalud colabora, <b>sea de</b> productos propios y/o de terceros y/o para mediar en la oferta y contratación de seguros. Puedes consultar la información ampliada sobre el tratamiento de tus datos y cómo ejercer tus derechos en la <a href="#">Política de Privacidad</a>
          </p>
        </div>
        <button>
          Buscar
        </button>
      </form>
    </section>
  </section>
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
#form-container {
  background: #0098d9;
}
#form {
  color: white;
  padding: 15px 10px 12px 10px;
  max-width: 550px;
  min-width: 10vh;
  margin: 0 auto;
}
h1 {
  margin: 0;
  font-size: 34px;
}
h2 {
  font-size: 16px;
  font-weight: normal;
}
a {
  color: white;
}
form > div > input,
form > div > select {
  background: #fff;
  color: black;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  font-family: 'Lato', sans-serif;
  margin: 0 10px 10px 0;
}
form > div > input {
  width: 200px;
}
form > div > select {
  width: 230px;
}
input::placeholder {
  opacity: 1;
}
#terms {
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
}
div > p {
  margin: 0;
  font-size: 12px;
}
input[type="checkbox"] {
  height: 30px;
  width: 30px;
  margin-right: 15px;
}
button {
  background: #ff4c50;
  font-size: 24px;
  color: #fff;
  border: none;
  padding: 15px 90px;
  border-radius: 30px;
  margin-top: 25px;
}
@media only screen and (max-width: 555px) {
  #form {
    text-align: center;
    margin: auto 0;
    width: auto;
  }
  form > div {
    display: flex;
    flex-direction: column;
    align-items: center !important;
    justify-content: center;
  }
  .input-container > input {
    width: 300px;
    margin-right: 0;
  }
  .input-container > select {
    width: 330px;
    margin-right: 0;
  }
}
</style>
<style>
body {
  background: #0098d9;
}
</style>