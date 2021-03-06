const { default: AdminJS } = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')

const { Admin, News, Contacts, Partners } = require('./resourceOptions')

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
        Partners: 'Партнеры',
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
            address: 'Адрес',
            phone: 'Номер телефона',
            mail: 'Почта для заявок',
            clientMail: 'Клиентский отдел',
            careerMail: 'Карьера в компании',
            workTime: 'Рабочее время',
            socials: 'Ссылки на соцсети',
            'socials.vk': 'ВКонтакте',
            'socials.instagram': 'Instagram',
            'socials.youTube': 'YouTube',
            'socials.whatsApp': 'WhatsApp',
            'socials.telegram': 'Telegram',
          },
        },
        Partners: {
          properties: {
            index: 'Порядковый номер',
            name: 'Название компании',
            url: 'URL',
            uploadedFile: 'Логотип партнера',
          },
        },
      },
    },
  },
  resources: [Admin, News, Contacts, Partners],
  branding: {
    companyName: 'IT-парк',
    logo: '',
    softwareBrothers: false,
  },
}

module.exports = options
