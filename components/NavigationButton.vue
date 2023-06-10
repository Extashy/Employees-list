<template>
  <!-- Создаём кнопку навигации, при клике на неё срабатывает метод scrollToSection -->
  <button class="Navigation-button" @click="scrollToSection">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'NavigationButton',
  props: {
    // Передаём через пропс название лейбла кнопки,
    // чтобы можно было его изменить в других компонентах
    label: {
      type: String,
      required: true
    }
  },
  methods: {
    // Этот метод
    scrollToSection () {
      // Константа со строкой (строка-селектор для поиска элемента с
      // соответствующим id)
      const sectionId = '#Employees'
      // Находим первый элемент, соответствующий селектору, с помощью querySelector
      // Прокручиваем страницу с помощью метода scrollIntoView до
      // видимости эелемента с найденным id
      document.querySelector(sectionId).scrollIntoView({
        // Плавная прокрутка к элементу
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
.Navigation-button {
  width: 160px;
  height: 50px;
  padding: 0 16px;
  margin: 32px 0;
  font-size: 1.5rem;
  font-weight: bold;
  color: #e8e8e8;
  border: 2px solid #e8e8e8;
  border-radius: 4px;
  background-color: #222;
  cursor: pointer;

  &:hover {
    background-color: #8d8d92;
    color: #000;
    transition: 0.5s;
  }
}
</style>
