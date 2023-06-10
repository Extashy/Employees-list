<template>
  <div id="Employees">
    <h2>Employees</h2>
    <table class="Employees-table">
      <thead class="Table-head">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Experience</th>
          <th>Age</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <!-- Итерируемся по массиву сотрудников и создаём строку таблицы каждого сотрудника -->
        <tr v-for="(employee, index) in employees" :key="index">
          <!-- Выводим значение свойства "firstName" текущего сотрудника в ячейке таблицы -->
          <td>{{ employee.firstName }}</td>
          <!-- Выводим значение свойства "lastName" текущего сотрудника в ячейке таблицы -->
          <td>{{ employee.lastName }}</td>
          <!-- Выводим значение свойства "experience" текущего сотрудника в ячейке таблицы -->
          <td>{{ employee.experience }}</td>
          <!-- Выводим значение свойства "age" текущего сотрудника в ячейке таблицы -->
          <td>{{ employee.age }}</td>
          <!-- Выводим значение свойства "address" текущего сотрудника в ячейке таблицы -->
          <td>{{ employee.address }}</td>
          <td class="Action-btns-wrapper">
            <!-- Создаём кнопку "Edit" для редактирования сотрудника и привязываем к ней метод "editEmployee" -->
            <button class="Action-btn Btn-primary" @click="editEmployee(employee)">
              Edit
            </button>
            <!-- Создаём кнопку "Delete" для удаления сотрудника и привязываем к ней метод "deleteEmployee" -->
            <button class="Action-btn Btn-secondary" @click="deleteEmployee(index)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Вставляем компонент "modal" с определенными свойствами и слушателями событий.
      Компонент отвечает за отображение модального окна для редактирования/добавления сотрудника. -->
    <modal :show="showModal" title="Edit Employee" @close="closeModal" @save="saveEmployee">
      <form>
        <div class="form-group">
          <label for="first-name">First Name:</label>
          <!-- Создаём текстовое поле для ввода имени сотрудника и связываем его с соответствующим свойством "firstName" в объекте "newEmployee". -->
          <input id="first-name" v-model="newEmployee.firstName" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="last-name">Last Name:</label>
          <!-- Создаём текстовое поле для ввода фамилии сотрудника и связываем его с соответствующим свойством "lastName" в объекте "newEmployee". -->
          <input id="last-name" v-model="newEmployee.lastName" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="experience">Experience:</label>
          <!-- Создаём текстовое поле для ввода стажа сотрудника и связываем его с соответствующим свойством "experience" в объекте "newEmployee". -->
          <input id="experience" v-model="newEmployee.experience" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="age">Age:</label>
          <!-- Создаём текстовое поле для ввода возраста сотрудника и связываем его с соответствующим свойством "age" в объекте "newEmployee". -->
          <input id="age" v-model="newEmployee.age" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="address">Address:</label>
          <!-- Создаём текстовое поле для ввода адреса сотрудника и связываем его с соответствующим свойством "address" в объекте "newEmployee". -->
          <input id="address" v-model="newEmployee.address" type="text" class="form-control">
        </div>
      </form>
    </modal>
    <!-- Создаём кнопку "Add Employee" для открытия модального окна добавления нового сотрудника и устанавливаем флаг "showModal" в значение "true". -->
    <button class="Btn Btn-primary" @click="showModal = true">
      Add Employee
    </button>
    <!-- Создаём кнопку навигации "Home Page" для прокрутки страницы вверх при нажатии на нее. -->
    <NavigationButton label="Home Page" @click="scrollToTop" />
  </div>
</template>

<script>
import Modal from '~/components/Modal.vue'
import NavigationButton from '~/components/NavigationButton.vue'

export default {
  name: 'EmployeesList',
  components: { Modal, NavigationButton },
  // Определяем свойства компонента
  props: {
    employees: { // Имя свойства
      type: Array, // Что ожидаем (тип свойства)
      required: true // Свойство обязательно должно быть передано в компонент EmployeesList
    }
  },
  // Определяем локальные данные компонента
  data () {
    return {
      // Контролируем видимость модального окна (изначально оно скрыто)
      showModal: false,
      // Объект с данными нового сотрудника
      // Так как он ещё не добавлен, то строки пустые
      newEmployee: {
        id: '',
        firstName: '',
        lastName: '',
        experience: '',
        age: '',
        address: ''
      },
      // Определяем пустой массив, где будут храниться данные о сотрудниках
      // Изначально пустой, так как добавленных сотрудников ещё нет
      employees: []
    }
  },
  // Определяем методы компонента
  methods: {
    // Открываем модальное окно редактирования сотрудника
    // и заполняем его данными текущего сотрудника
    editEmployee (employee) {
      // Используем Object.assign() для создания копии объекта employee
      // и присваиваем его значения новому объекту newEmployee (чтобы изменения
      // внесённые в newEmployee не влияли на исходный объект employee)
      this.newEmployee = Object.assign({}, employee)
      this.showModal = true // Открываем модальное окно
    },
    // Удаляем сотрудника из массива "employees" по указанному индексу
    deleteEmployee (index) {
      this.employees.splice(index, 1) // Используем метод splice
    },
    // Закрываем модальное окно редактирования/добавления сотрудника и очищаем форму
    closeModal () {
      this.showModal = false // Модальное окно изначально скрыто, пока не вызван метод
      this.newEmployee = { // Очистка полей формы
        id: '',
        firstName: '',
        lastName: '',
        experience: '',
        age: '',
        address: ''
      }
    },
    // Сохраняем данные сотрудника, выполняя операцию добавления нового сотрудника
    // или обновления существующего
    saveEmployee () {
      const index = this.employees.findIndex(employee => employee.id === this.newEmployee.id)
      if (index === -1) { // Если это новый сотрудник
        this.newEmployee.id = Date.now() // Генерация уникального идентификатора
        this.employees.push(this.newEmployee) // Добавление нового сотрудника в массив
      } else { // Если это существующий сотрудник
        this.employees[index] = this.newEmployee // Обновление данных существующего сотрудника
      }
      this.closeModal() // Закрытие модального окна и очистка полей формы
    },
    // Прокручиваем страницу вверх при нажатии на кнопку навигации
    scrollToTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#Employees {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  h2 {
    font-size: 2.5em;
    margin-top: 15px;
  }

  .Employees-table {
    width: 90%;
    border-collapse: collapse;
    border: 1px solid #e8e8e8;
    font-style: normal;
    font-weight: bold;

    .Action-btns-wrapper {
      display: flex;
      justify-content: center;
    }

    tbody {
      text-align: center;
    }
  }

  .Employees-table th,
  .Employees-table td {
    border: 1px solid #e8e8e8;
    padding: 8px;
  }

  .Btn {
    width: 180px;
    height: 50px;
    padding: 0 16px;
    margin: 32px 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #222;
    border: 2px solid #906f85;
    border-radius: 4px;
    background-color: #e8e8e8;
    cursor: pointer;

    &:hover {
      background-color: #222;
      color: #e8e8e8;
      transition: 0.5s;
    }
  }

  .Action-btn {
    width: 90px;
    height: 35px;
    padding: 0 16px;
    margin: 32px 0;
    font-size: 1rem;
    font-weight: bold;
    color: #222;
    border: 2px solid #906f85;
    border-radius: 4px;
    background-color: #e8e8e8;
    cursor: pointer;

    &:hover {
      background-color: #222;
      color: #e8e8e8;
      transition: 0.5s;
    }
  }

  .Action-btn.Btn-primary {
    margin-right: 10px;
  }

  .Action-btn.Btn-secondary {
    margin-left: 10px;
  }
}
</style>
