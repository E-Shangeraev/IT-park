const { default: AdminBro } = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')

const { Admin, Subject } = require('./resourceOptions')

AdminBro.registerAdapter(AdminBroMongoose)

/** @type {import('admin-bro').AdminBroOptions} */
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
        Subjects: 'Предметы подготовки',
      },
      buttons: {
        filter: 'Фильтр',
        save: 'Сохранить',
      },
      resources: {
        Subjects: {
          properties: {
            name: 'Название предмета',
          },
        },
      },
    },
  },
  resources: [Admin, Subject],
  branding: {
    companyName: 'IT-парк',
    logo: '',
    softwareBrothers: false,
  },
}

module.exports = options
