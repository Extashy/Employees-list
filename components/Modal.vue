<template>
  <!-- Используем директиву v-if для управления видимостью модального окна -->
  <div v-if="show" class="Modal">
    <div class="Modal-content">
      <div class="Modal-header">
        <!-- Заголовок модального окна, значение которого
        берётся из свойства title -->
        <h3>{{ title }}</h3>
        <!-- Кнопка, закрывающая окно (при клике, вызывается метод close) -->
        <button class="Close" @click="close">
          &times;
        </button>
      </div>
      <div class="Modal-body">
        <!-- Точка вставки, куда будет подставлено содержимое, когда компонент
        будет использован -->
        <slot />
      </div>
      <div class="Modal-footer">
        <!-- Кнопка, использующая метод save, при клике -->
        <button class="Btn Btn-primary" @click="save">
          Add
        </button>
        <!-- Кнопка, использующая метод close, при клике -->
        <button class="Btn Btn-secondary" @click="close">
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Определяем свойства компонента
  props: {
    title: {
      type: String,
      default: 'Edit Employee'
    },
    show: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    // Вызываем событие "close" с помощью $emit,
    // чтобы оповестить родительский компонент о закрытии модального окна
    close () {
      this.$emit('close')
    },
    // Метод save вызывает событие "save" с помощью $emit,
    // чтобы оповестить родительский компонент о сохранении данных модального окна
    save () {
      this.$emit('save')
    }
  }
}
</script>

<style lang="scss">
.Modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  .form-group {
    display: flex;
    flex-direction: column;
  }
}

.Modal-content {
  background-color: #fefefe;
  color: #222;
  font-style: normal;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 30%;

  .Modal-header {
    display: flex;
    justify-content: space-between;

    & > h3 {
      margin: 0;
    }

    .Close {
      color: #aaa;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
      border: none;
      background: none;

      &:hover,
      &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }

  .Modal-body {
    padding: 20px;
  }

  .Modal-footer {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    border-top: 1px solid #eee;

    .Btn {
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

    .Btn-primary {
      margin-right: 10px;
    }

    .Btn-secondary {
      margin-left: 10px;
    }
  }
}
</style>
