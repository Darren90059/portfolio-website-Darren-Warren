<template>
  <div>
    <div class="layout">
      <main class="content">
        <div class="content-area">
          <h1>Portfolio</h1>
          <p>Here are some projects I have done</p>
          
          <!-- Loading Spinner -->
          <div v-if="loading" class="loading-indicator">
            <p>Loading...</p>
          </div>

          <!-- Repo List -->
          <ul v-if="!loading">
            <li v-for="repo in repos" :key="repo.id" class="repo-item">
              <div class="repo-name">
                <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
              </div>
              <div v-if="repo.description" class="repo-description">{{ repo.description }}</div>
              <div v-if="repo.language" class="repo-language"><strong>Language:</strong> {{ repo.language }}</div>
              <div v-if="repo.updated_at" class="repo-updated">
                <strong>Last updated:</strong> {{ formatDate(repo.updated_at) }}
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const repos = ref([]);
    const loading = ref(true); // Track loading state

    // Fetch GitHub repositories when the component is mounted
    onMounted(async () => {
      try {
        const response = await fetch('https://api.github.com/users/Darren90059/repos');
        if (response.ok) {
          repos.value = await response.json();
        } else {
          console.error('Failed to fetch data from GitHub');
        }
      } catch (error) {
        console.error('Error fetching GitHub repos:', error);
      } finally {
        loading.value = false; // Set loading to false when data is loaded or an error occurs
      }
    });

    // Function to format the last updated date
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };

    return {
      repos,
      formatDate,
      loading, // Return loading state
    };
  },
};
</script>

<style scoped>
/* Copy the same styles from App.vue for consistency */
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-color: rgb(43, 43, 43);
  color: rgb(255, 255, 255);
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
  color: #ccc;
}

.repo-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #616161;
  border-radius: 5px;
  background-color: #2c2c2c;
}

.repo-name {
  font-size: 18px;
  font-weight: bold;
}

.repo-description {
  font-size: 14px;
  color: #ccc;
}

.repo-language,
.repo-updated {
  font-size: 14px;
  color: #ccc;
  margin-top: 5px;
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

p {
  font-size: 16px;
  line-height: 1.5;
  color: #ccc;
}

/* Loading Indicator */
.loading-indicator {
  text-align: center;
  font-size: 20px;
  color: #ccc;
}
</style>
