<template>
    <div>
      <h1>About Me</h1>
      <img src="@/assets/profile.jpg" alt="Profile Picture" class="profile-picture" />
      <p>My name is Darren Warren and I was born in Bahrain but raised in the United States. All my life I have been facinated by technology and when my family got a desktop it started my path to where I am now. I am taking classes in development and networking to be multifacited but also just becasue I like to learn.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About',
  }
  </script>

<style scoped>
.about-container {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.profile-picture {
  width: 200px;
  height: 200px;
  border-radius: 10%;
  object-fit: cover;
  margin-bottom: 20px;
}

p {
  font-size: 16px;
  line-height: 1.5;
  color: #ccc;
}
</style>