# StrapiDojo

## How To Build Plugins in Strapi v4

### What are plugins ?

- function ที่เราต้องการใช้งานใน strapi
- plugin allow adding or extending new functionality to strapi
- marketplace มี plugin สำเร็จรูปมาให้ใช้
- เราสามารถสร้าง plugin ของเราเองได้

### Step to create

1. strapi generate (plugin)
2. สร้าง plugin config ./config/plugins.js แล้วนำ config ที่ได้จากการ generate ไปวาง
3. strapi จะ generate code ทั้งหมดเกี่ยวกับ plugin มาให้
4. ใน folder plugin
   - ที่เราสร้างจะมี 2 folder หลัก ก็คือ admin,server
   - package.json ที่เอาไว้ลง package ต่างๆที่เราจะใช้ใน plugin ของเรา
   - strapi-admin.js => เป็น export file สำหรับ admin folder
   - strapi-server.js => เป็น export file สำหรับ server folder
   - index.js => เอาไว้ register function ที่ต้องการจะเอามาใช้ใน plugin เรา
   - admin folder => front-end react mini app ที่อยู่ใน plugin
   - server folder => back-end mini app ที่อยู่ใน plugin
5. server folder
   - access content type
   - access controller
   - access middleware
   - access routes
   - access services

### admin structure

1. components/initializer/index.js
   - set up plugin
2. components/PluginIcon/index.js
   - set icon for plugin navigation
3. page/App/index.js
   - set up route
4. page/HomePage/index.js
   - เป็น landing page component หน้าแรกของ plugin
5. translations
   - set text ตามภาษา
6. index.js
   - เป็น entry point ของ plugin app
   - register plugin ไปที่ navigation
   - register plugin ที่ initializer ที่เป็นตัว init plugin ui

`Note :` npm run develop --watch-admin(เพื่อให้ rebuild เมื่อเราทำการ save+change code)

## Ref

- https://strapi.io/plugin-resources
- https://design-system.strapi.io/
- https://strapi.io/blog/creating-strapi-dynamic-zone-in-nuxtjs-app
- https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-admin-reset-user-password
- https://github.com/PaulBratslavsky/plugindev-intro-video-3-resources
