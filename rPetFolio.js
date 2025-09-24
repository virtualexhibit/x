const PetFolioRecipe = {
  navButtons: [
    {
      component: "AddButton",
      directives: { class: "btn-primary mt-3" },
      display: { text: "Register a Pet" },
      on: { action: "addPet" } 
    },
    {
      component: "AddButton",
      directives: { class: "btn-secondary mt-3" },
      display: { text: "Pet List" },
      on: { action: "petList" } 
    },
  ],

  petListButtons: [
    {
      component: "AddButton",
      directives: { class: "btn-warning btn-sm mt-2" },
      display: { text: "★ Favorite" },
      on: { action: "favorite" }
    },
    {
      component: "AddButton",
      directives: { class: "btn-danger btn-sm mt-2" },
      display: { text: "Remove" },
      on: { action: "remove" }
    }
  ],

  pets: []
}

export { PetFolioRecipe }
