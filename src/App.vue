<template>
  <div id="app">
    <header class="header">
      <div class="logo">Darren Warren</div>
      <nav class="nav">
        <router-link to="/" class="button-link">Home</router-link>
        <router-link to="/about" class="button-link">About Me</router-link>
        <router-link to="/portfolio" class="button-link">Portfolio</router-link>

      </nav>
    </header>
    <div class="layout">
      <main class="content">
        <router-view></router-view>
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
  name: 'App',
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

.nav .button-link {
  margin-left: 10px;
  padding: 8px 16px;
  font-size: 14px;
  color: #000000;
  background-color: #ffffff;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.nav .button-link:hover {
  background-color: #bbbbbb;
}

.layout {
  display: flex;
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
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
