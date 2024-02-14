<template>
  <div class="q-pa-md">
    hgjgj

    <q-checkbox  v-model="val" checked-icon="star" unchecked-icon="star_border" indeterminate-icon="help" label="Like"/>
  </div>

  <div>
    <!-- <q-btn type="button" id="FavLike"> ❤️ </q-btn> -->

  </div>

  <!-- <q-icon
            class="cursor-pointer"
            name="favorite" /> -->
</template>

<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const rows = ref([])
const route = useRoute()
const val = ref(true)
const fetchdata = async () => {
  console.log(route)
  try {
    const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`) // prendo elementi dall'altra pagina
    rows.value = data.data
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  fetchdata()
})

</script>
<style>
</style>
