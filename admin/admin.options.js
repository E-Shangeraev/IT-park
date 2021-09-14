const { default: AdminJS } = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')

const { Admin, News, Contacts } = require('./resourceOptions')

AdminJS.registerAdapter(AdminJSMongoose)

/** @type {import('adminjs').AdminJSOptions} */
const options = {
  locale: {
    language: 'rus',
    translations: {
      actions: {
        new: 'Добавить',
        edit: 'Редактировать',
        show: 'Подробнее',
        delete: 'Удалить',
        list: 'Записи',
        search: 'Искать',
        addNewItem: 'Добавить',
      },
      labels: {
        Admin: 'Администраторы',
        News: 'Новости',
        Contacts: 'Контактные данные',
      },
      buttons: {
        filter: 'Фильтр',
        save: 'Сохранить',
      },
      resources: {
        News: {
          properties: {
            uploadedFile: 'Изображение',
            title: 'Заголовок',
            text: 'Текст',
            date: 'Дата публикации',
          },
        },
        Contacts: {
          properties: {
            phone: 'Номер телефона',
            clientMail: 'Клиентский отдел',
            careerMail: 'Карьера в компании',
          },
        },
      },
    },
  },
  resources: [Admin, News, Contacts],
  branding: {
    companyName: 'IT-парк',
    logo: '',
    softwareBrothers: false,
  },
}

module.exports = options
