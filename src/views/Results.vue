<template>
  <section
    v-if="!loading"
    id="results-view">
    <section id="results-container">
      <section id="tabs">
        <button
          v-for="modality in Object.keys(results)"
          :class="modality === selectedModality ? 'tab-button-selected' : 'tab-button'"
          @click="selectTab(modality)">
          <span>{{ modality }}</span>
          <span><b>Desde {{ results[modality][0].value }}€</b></span>
        </button>
      </section>
      <section id="results">
        <section id="results-header">
          <h1>
            Estas son las opciones disponibles en <span id="results-header-modality">{{ selectedModality }}</span>
          </h1>
        </section>
        <div id="prices-container">
          <div id="prices-header">
            <span id="value-header">Precio</span>
            <span id="fr-header">Franquicia</span>
            <span id="co-header">Coberturas</span>
            <img
              id="phone-header" 
              :src="PhoneIcon"
              alt="phone">
          </div>
          <div
            v-for="price in modalityData"
            class="price-row">
            <div class="price-description">
              <span class="price-description-name">Axa AutoProtect</span>
              <span class="price-description-modality">{{ selectedModality }}</span>
            </div>
            <span class="price-value">{{ price.value }}€</span>
            <span class="price-fr">1200€</span>
            <button class="download-button">
              <img :src="DownloadIcon" alt="download">
            </button>
            <button class="call-button">Te llamamos gratis</button>
            <button class="buy-button">Contratar</button>
          </div>
        </div>
      </section>
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
import PhoneIcon from '@/assets/phone.png'
import DownloadIcon from '@/assets/download.png'

export default {
  name: 'Results',
  components: {
    Loading
  },
  data: () => ({
    loading: false,
    results: {},
    selectedModality: null,
    modalityData: [],
    PhoneIcon,
    DownloadIcon
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
      prices.sort((a, b) => a.value - b.value)
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
#results-view {
  margin-top: 20px;
}
#results-container {
  color: white;
  width: 650px;
  margin: 0 auto;
  padding-top: 15px;
  background-color: #fff;
}
#tabs {
  display: flex;
  gap: 5px;
  padding: 0px 5px;
}
.tab-button,
.tab-button-selected {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #eee;
  text-align: start;
  color: #101e39;
  border: #babdc1 solid 2px;
  border-radius: 5px 5px 0px 0px;
  width: 150px;
  padding: 5px 20px;
}
.tab-button-selected {
  background: #fff;
  z-index: 3;
  border-bottom: none;
}
#results-header {
  color: #8f8f8f;
}
#results-header > h1 {
  text-align: center;
}
#results-header-modality {
  color: #1f5561;
}
table {
  color: #101e39;
  border-collapse: collapse;
}
th, td {
  text-align: center;
}
#results { 
  border: #babdc1 solid 2px;
  padding: 0 15px 20px 15px;
  margin-top: -2px;
  background: #fff;
  position: relative;
}
#prices-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#prices-header {
  display: flex;
  /* justify-content: center; */
  padding: 0 20px;
  font-size: 12px;
  font-weight: bold;
  color: #101e39;
  margin-bottom: 15px;
}
#prices-header > img {
  height: 15px;
}
#value-header {
  margin-left: 25%;
}
#fr-header {
  margin-left: 3%;
}
#co-header {
  margin-left: 0.5%;
}
#phone-header {
  margin-left: 10%;
}
.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #101e39;
  border: #babdc1 solid 2px;
  border-radius: 10px;
  padding: 10px 20px;
}
.price-description {
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 20%;
}
.price-description-name {
  font-size: 14px;
  font-weight: bold;
}
.price-description-modality {
  font-size: 12px;
}
.price-value {
  font-size: 14px;
  color: #ff4c50;
  font-weight: bold;
}
.price-fr {
  font-size: 14px;
}
.download-button {
  background: #009ddf;
  border-radius: 100%;
  border-color: #009ddf;
  border-style: solid;
  color: #fff;
  height: 25px;
  width: 25px;
  display: flex;
  justify-content: center;
  padding-top: 2px;
}
.download-button > img {
  width: 15px;
  height: 15px;
}
.call-button {
  color: #009ddf;
  background-color: #fff;
  border-radius: 15px;
  border: #009ddf solid 2px;
  padding: 3px 10px;
}
.buy-button {
  color: #fff;
  background: #101e39;
  border-color: #101e39;
  border-style: solid;
  border-radius: 15px;
  padding: 3px 25px;
}
#results-footer {
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  padding-bottom: 20px;
  background: #eee;
}
#results-footer > button {
  color: #6c6e70;
  background-color: #eee;
  width: 150px;
  border-radius: 15px;
  border: #101e39 solid 2px;
  padding: 5px 20px;
  margin-right: 30%;
  font-weight: bold;
}
@media only screen and (max-width: 650px) {
  #results-container {
    width: 95%;
  }
  #tabs {
    flex-direction: column;
  }
  .tab-button,
  .tab-button-selected {
    width: 100%;
  }
  .tab-button-selected {
    border: #babdc1 solid 2px;
  }
  #prices-header {
    display: none;
  }
  #prices-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .price-row {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    width: 70%;
    gap: 8px;
    padding: 10px 20px;
  }
  .price-description {
    width: 100%;
    text-align: center;
  }
  .buy-button {
    width: 120px;
    padding: 3px 15px;
  }
  #results-footer {
    display: flex;
    justify-content: center;
  }
  #results-footer > button {
    margin-right: 0;
  }
}
</style>
