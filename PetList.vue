<template>
  <div class="pet-card mb-3 p-2 border rounded">
    <h6>{{ merged.display.name }} <span v-if="merged.favorite" class="text-warning">(favorite)</span>
</h6> 

    <button class="btn btn-sm btn-info mb-2" @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>

    <div v-if="detailsAreVisible" class="mt-2">
      <ul>
        <li><strong>Age:</strong> {{ merged.display.age }}</li>
        <li><strong>Breed:</strong> {{ merged.display.breed }}</li>
        <li><strong>Gender:</strong> {{ merged.display.gender }}</li>
        <li><strong>Type:</strong> {{ merged.display.petType }}</li>
        <li><strong>Vaccines:</strong> {{ merged.display.vaccines?.join(', ') || 'None' }}</li>
      </ul>

      <div class="d-flex gap-2 mt-2">
        <component
          v-for="(field, index) in petListButtons"
          :key="index"
          :is="field.component"
          :item="field"
          :class="field.directives.class"
          @click="handleAction(field)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { PetListRecipe } from '../recipes/rPetList.js'
import { PetFolioRecipe } from '../recipes/rPetFolio.js'
import AddButton from '../common/AddButton.vue'

export default {
  name: 'PetList',
  components: { AddButton }, 
  props: {
    item: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      detailsAreVisible: false,
      petListButtons: PetFolioRecipe.petListButtons
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    handleAction(field) {
      this.$emit(field.on.action, this.merged)
    }
  },
  computed: {
    merged() {
      return {
        ...PetListRecipe,
        ...this.item,
      }
    },
  },
}
</script>
