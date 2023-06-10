<template>
  <div id="Home-page" ref="Home-page">
    <div class="Home-title">
      <img class="Home-logo" src="@/assets/images/Logo.jpg" alt="Logo">
      <h1>The Black Rose Company</h1>
      <h2>Welcome!</h2>
      <!-- Импортированная кнопка навигации до списка сотрудников -->
      <Navigation-button label="Employees" />
    </div>
  </div>
</template>

<script>
import NavigationButton from '~/components/NavigationButton.vue'

export default {
  name: 'HomePage',
  components: { NavigationButton }
}
</script>

<style lang="scss">
#Home-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .Home-title {
    display: flex;
    flex-direction: column;
    align-items: center;

    .Home-logo {
      max-width: 300px;
      max-height: 300px;
      border-radius: 50%;
    }

    h1 {
      font-size: 3.5em;
      margin-top: 50px;
    }

    h2 {
      font-size: 3em;
      margin-top: 25px;
    }
  }
}
</style>
