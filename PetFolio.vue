<template>
  <div class="slamboo-container">
    <div class="text-center mb-3">
      <header><h4>SlamBoo</h4></header>
    </div>

    <!-- Navigation buttons -->
    <div class="d-grid gap-2 d-md-flex justify-content-md-center mb-4">
      <component
        v-for="(field, index) in slamBooRecipe.navButtons"
        :is="field.component"
        :key="index"
        :item="field"
        :class="[
          'btn',
          currentAction === field.on.action ? 'btn-success active' : 'btn-secondary'
        ]"
        @click="navButtonIsClick(field)"
      />
    </div>

    <!-- Registration form -->
    <RegistrationForm
      v-if="showRegistrationForm"
      @add-pet="addPet"
    />

    <!-- Pet list -->
    <div v-if="showPetList" class="list-container">
      <h5 class="text-center">Pet List</h5>

      <div v-if="slamBooRecipe.pets.length === 0" class="text-center text-muted">
        No pets added yet.
      </div>

      <component
        v-else
        v-for="field in slamBooRecipe.pets"
        :is="field.component"
        :key="field.id"
        :item="field"
        @remove="removePet"
        @favorite="toggleFavorite"   

      />
    </div>
  </div>
</template>

<script>
import { PetFolioRecipe } from '../recipes/rPetFolio.js'
import AddButton from '../common/AddButton.vue'
import RegistrationForm from './RegistrationForm.vue'
import PetList from '../common/PetList.vue'
import petsData from './pets.json'

export default {
  name: 'SlamBoo',
  components: { AddButton, RegistrationForm, PetList },
  data() {
    return {
    slamBooRecipe: {
        ...PetFolioRecipe,       // copy navButtons + petListButtons
        pets: petsData          // use JSON file for initial pets
      },
      showRegistrationForm: false,
      showPetList: true,
      currentAction: 'petList',

    }
  },
  methods: {
    navButtonIsClick(field) {
      this.currentAction = field.on?.action

      if (field.on?.action === 'addPet') {
        this.showRegistrationForm = true
        this.showPetList = false
      }
      if (field.on?.action === 'petList') {
        this.showRegistrationForm = false
        this.showPetList = true
      }
    },
    addPet(pet) {
      this.slamBooRecipe.pets.unshift({
        component: "PetList",
        id: pet.id,
        display: { ...pet },
        favorite: false
      })
      this.showRegistrationForm = false
      this.showPetList = true
      this.currentAction = 'petList'
    },
    removePet(petToRemove) {
    const confirmed = window.confirm(`Do you want to remove ${petToRemove.display.name}?`)
    if (confirmed) {
      this.slamBooRecipe.pets = this.slamBooRecipe.pets.filter(
        pet => pet.id !== petToRemove.id
      )
    }
  },
  toggleFavorite(petToToggle) {
  const pet = this.slamBooRecipe.pets.find(p => p.id === petToToggle.id)
  if (pet) {
    const action = pet.favorite ? "remove from favorites" : "make favorite"
    const confirmed = window.confirm(`Do you want to ${action} ${pet.display.name}?`)
    if (confirmed) {
      pet.favorite = !pet.favorite
    }
  }
}

  }
}
</script>
