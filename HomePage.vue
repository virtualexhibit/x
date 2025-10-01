<template>
  <div class="homepage">
    <header class="welcome">
      <h1>Alex’s Stash of Mini Apps</h1>
      <p>Created during Hachiko Training</p>
    </header>

    <section class="accordion">
      <div 
        v-for="(app, index) in apps" 
        :key="index" 
        class="accordion-item"
      >
        <button class="accordion-header" @click="toggleAccordion(index)">
          <span>{{ app.title }}</span>
          <span class="icon">{{ activeIndex === index ? '-' : '+' }}</span>
        </button>

        <div 
          class="accordion-content" 
          v-show="activeIndex === index"
        >
          <p>{{ app.description }}</p>
          <img :src="app.image" :alt="app.title" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RoosterImg from "@/assets/logo.png";

export default {
  name: "HomePage",
  data() {
    return {
      activeIndex: null,
      apps: [
        {
          title: "Rooster Slayer",
          description: "A fun little game where you try to outwit a rooster 🐓⚔️.",
          image: RoosterImg
        },
        {
          title: "My Pet Registration Form",
          description: "Register your pets with ease using this handy form 🐶🐱.",
          image: "https://via.placeholder.com/400x200/f06292/fff?text=Pet+Registration+Form"
        },
        {
          title: "Registration Form",
          description: "A clean and simple registration form for new users 📝.",
          image: "https://via.placeholder.com/400x200/ec407a/fff?text=Registration+Form"
        }
      ]
    };
  },
  methods: {
    toggleAccordion(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    }
  }
};
</script>

<style scoped>
.homepage {
  font-family: "Segoe UI", sans-serif;
  padding: 2rem;
  max-width: 850px;
  margin: auto;
  color: #333;
  background: linear-gradient(135deg, #f48fb1 0%, #ce93d8 100%);
  border-radius: 20px;
  box-shadow: 0px 4px 16px rgba(0,0,0,0.15);
}

.welcome {
  text-align: center;
  margin-bottom: 2rem;
  color: #fff;
}

.welcome h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.welcome p {
  font-size: 1.1rem;
    margin-bottom: 0;

  opacity: 0.95;
}

.accordion {
  border-radius: 10px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(6px);
}

.accordion-item {
  border-bottom: 2px solid #f8bbd0;
}

.accordion-header {
  width: 100%;
  padding: 1rem 1.2rem;
  border: none;
  text-align: left;
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background: linear-gradient(90deg, #f48fb1 0%, #f06292 100%);
  color: #fff;
  transition: background 0.3s, transform 0.2s;
}

.accordion-header:hover {
  background: linear-gradient(90deg, #ec407a 0%, #ad1457 100%);
}

.accordion-content img {
  max-width: 100%;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
}

.icon {
  font-weight: bold;
  font-size: 1.4rem;
}

.accordion-content {
  padding: 1rem 1.5rem;
  animation: fadeIn 0.3s ease-in-out;
  background: #fff;
}

.accordion-content p {
  margin-bottom: 1rem;
  font-size: 1rem;
  color: #444;
}

.accordion-content img {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0px 3px 12px rgba(0,0,0,0.2);
}
</style>
