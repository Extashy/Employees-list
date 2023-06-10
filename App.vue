<template>
  <div>
    <HomePage />
    <!-- Передаём значение employeesData в свойство employees
    компонента EmployeeList
    Используем : для привязки значения employeesData
    к свойству employees компонента, чтобы не передавать его как простую строку -->
    <EmployeeList :employees="employeesData" />
  </div>
</template>

<script>
import HomePage from '~/components/HomePage.vue'
import EmployeeList from '~/components/EmployeeList.vue'

export default defineComponent({
  components: { HomePage, EmployeeList }
})
</script>

<style lang="scss">
@import '@/assets/styles/Main.scss';
@import '@/assets/styles/Reset.scss';
</style>
