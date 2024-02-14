<template>
  <div class="q-pa-md">
    <q-table
      @row-click="onRowClick"
      title="Treats"
      name="RowsClick"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>

</template>

<script setup>

import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const rows = ref([])
const router = useRouter()
const columns = [{ name: 'title', label: 'Titolo', field: 'title', align: 'left' }, // Name
  { name: 'userId', label: 'UserId', field: 'userId', align: 'left' }
]
const fetchdata = async () => {
  // Promises
  try {
    console.log('Ciao')
    const data = await axios.get('https://jsonplaceholder.typicode.com/posts')
    // console.log(data.data)
    rows.value = data.data
  } catch (error) {
    console.error(error)
  }
}
const onRowClick = async (evt, row, index) => {
  console.log(evt, row, index) // lo fa in automatico l'evento
  router.push(`posts/${index}`) // Passo alla pagina successiva
}
onMounted(() => {
  fetchdata()
})
// router.push("path of router"), qtable row click
</script>
<style>
</style>
