<!-- Notes:find better color for links | add to project section | find point for sidebar or remove it  -->
 <!-- Darren Warren 10/10/2024 -->
<script setup>
import './assets/base.css'
</script>

<template>
  <div id="app">
    <header class="header">
      <div class="logo">Darren Warren</div>
      <nav class="nav">
        <button @click="navigateTo('about')">About Me</button>
        <button @click="navigateTo('projects')">Projects</button>
      </nav>
    </header>

    <div class="layout">
      <aside class="sidebar">
        <ul>
          <!-- currently not setup do to no other pages -->
          <li><a href="#">Main Page</a></li>
        </ul>
      </aside>

      <main class="content">
        <div class="content-area">
          <h1>{{ pageTitle }}</h1>

          <!-- About Me Section -->
          <div v-if="currentPage === 'about'">
            <img src="./assets/profile.jpg" alt="Profile Picture" class="profile-picture" />

            <!-- About Me text -->
            <p>My name is Darren Warren and I was born in Bahrain but raised in the United States. All my life I have been facinated by technology and when my family got a desktop it started my path to where i am now. I am taking classes in development and networking to be multifacited but also just becasue I like to learn. </p>
          </div>

          <!-- Projects Section -->
           <!-- nothing here yet -->
          <p v-if="currentPage === 'projects'">
            This is the Projects section. 
          </p>
        </div>
      </main>
    </div>

    <footer class="footer">
      <p>Phone:(000-000-0000)</p>
      <p>Email: eMail Address</p>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      currentPage: 'about',
      pageTitle: 'About Me',
    }
  },
  methods: {
    navigateTo(page) {
      this.currentPage = page;
      this.pageTitle = page === 'about' ? 'About Me' : 'Projects';
    }
  }
}
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-color: rgb(43, 43, 43);
  color: rgb(255, 255, 255);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #414141;
  border-bottom: 1px solid #616161;
}

.logo {
  font-weight: bold;
}

.nav button {
  margin-left: 10px;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

.layout {
  display: flex;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.sidebar {
  width: 200px;
  margin-right: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar ul li {
  margin: 10px 0;
}

.content {
  flex-grow: 1;
  padding: 20px;
}

.content-area {
  font-size: 16px;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.footer {
  padding: 10px;
  background-color: #414141;
  border-top: 1px solid #ddd;
  text-align: center;
}

a {
  color: rgb(78, 78, 251);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
