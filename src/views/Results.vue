<template>
  <section
    v-if="!loading"
    id="results-container">
    <section id="results">
      <section id="tabs">
        <button
          v-for="modality in Object.keys(results)"
          class="tab-button"
          @click="selectTab(modality)">
          <span>{{ modality }}</span>
          <span>Desde {{ results[modality][results[modality].length - 1].value }}€</span>
        </button>
      </section>
      <section>
        Estas son las opciones disponibles en Terceros Basico
      </section>
      <table>
        <tr>
          <th />
          <th>Precio</th>
          <th>Franquicia</th>
          <th>Coberturas</th>
          <th>TEL</th>
        </tr>
        <tr v-for="price in modalityData">
          <td class="price-description">
            <span>Axa AutoProtect</span>
            <span>{{ selectedModality }}</span>
          </td>
          <td>{{ price.value }}€</td>
          <td>-</td>
          <td>DL</td>
          <td>
            <button>Te llamamos gratis</button>
          </td>
          <td>
            <button>Contratar</button>
          </td>
        </tr>
      </table>
      <section id="results-footer">
        <button @click="goToForm()">Retroceder</button>
      </section>
    </section>
  </section>
  <Loading v-else/>
</template>

<script>
import axios from 'axios'
import Loading from '@/components/Loading.vue'

export default {
  name: 'Results',
  components: {
    Loading
  },
  data: () => ({
    loading: false,
    results: {},
    selectedModality: null,
    modalityData: []
  }),
  methods: {
    search () {
      this.loading = true
      axios({
          method: 'get',
          url: `https://www.doctori.com/coche/prices`,
          headers: {
            Authentication: '68NkpNZfYNOaefCGCTXcWXngT7EEhiQf1hMxaXpE9TYqMqtcttIqbnxW0sQG1mM8ZgzeV0TEyhn'
          }
        })
        .then(res => {
          this.assignResults(res.data.prices)
          })
        .catch(err => {
          console.error(err)
          this.assignResults([
            {
              "description": "ANUAL",
              "value": 327.07,
              "modality": "TERCEROS BÁSICO"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TERCEROS AMPLIADO"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TERCEROS AMPLIADO"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TERCEROS AMPLIADO"
            },
            {
              "description": "ANUAL",
              "value": 376.08,
              "modality": "TERCEROS AMPLIADO"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TERCEROS AMPLIADO"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TODO RIESGO SIN FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": 627.96,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": 481.19,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": 425.19,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": 415.53,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": null,
              "modality": "TODO RIESGO CON FRANQUICIA"
            },
            {
              "description": "ANUAL",
              "value": 553.61,
              "modality": "TODO RIESGO CON FRANQUICIA"
            }
          ])
        })
        .finally(() => {
          this.loading = false
        })
    },
    assignResults (prices) {
      // Sort descending by value
      prices.sort((a, b) => b.value - a.value)
      // Store prices in respective modalities
      prices.forEach(price => {
        if (price.value) {
          if (!(price.modality in this.results)) {
            this.results[price.modality] = []
          }
          this.results[price.modality].push(
            {
              description: price.description,
              value: price.value
            }
          )
        }
      })
      this.selectTab(prices[0].modality)
    },
    selectTab (modality) {
      this.selectedModality = modality
      this.modalityData = this.results[modality]
    },
    goToForm () {
      this.$router.push('/')
    }
  },
  beforeMount() {
    this.search()
  }
}
</script>

<style scoped>
#results-container {
  margin-top: 20px;
}
#results {
  color: white;
  padding: 15px 10px 12px 10px;
  max-width: 650px;
  min-width: 10vh;
  margin: 0 auto;
  background-color: #fff;
}
#tabs {
  display: flex;
}
.tab-button {
  display: flex;
  flex-direction: column;
}
table {
  color: #101e39;
}
.price-description {
  display: flex;
  flex-direction: column;
}
#results-footer {
  display: flex;
  justify-content: flex-end;
}
</style>