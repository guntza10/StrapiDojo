# StrapiDojo

## How To Build Plugins in Strapi v4

### What are plugins ?

- function ที่เราต้องการใช้งานใน strapi
- plugin allow adding or extending new functionality to strapi
- marketplace มี plugin สำเร็จรูปมาให้ใช้
- เราสามารถสร้าง plugin ของเราเองได้

### Step to create Plugin

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

### Step to create Content-Type

1. strapi generate (Content-Type)
2. เลือก option ต่างๆที่เราต้องการจะสร้างให้กับ content-type
3. strapi generate content-type เสร็จ จะได้ไฟล์ schema ของ content-type ที่ถูก generate ที่ `\plugins\<pluginname>\server\content-types\<content type name>\schema.json`
4. ในไฟล์ schema.json ของ content-type จะมีรายละเอียด
   - collectionType
   - collectionName
   - basic info
   - options
   - attribute ของ content-type (สามารถ modify attribute ได้) (https://docs.strapi.io/developer-docs/latest/development/backend-customization/models.html#model-attributes)
   - pluginOptions => เอาไว้จัดการว่าต้องให้แสดงที่ content-manger,content-builder มั้ย
5. พอสร้าง schema เสร็จต้อง export ไปใช้ที่ index.js ของ folder content-types ด้วยเพื่อให้แสดงที่ Content Manager,Content-Type Builder
   - สร้าง index.js เอาไว้รวม export ที่ folder content-type(ที่เรา generate)
   - import ไปใช้ที่ index.js ของ folder content-type

`Note :` strapi console => cli command ที่เอาไว้ log ดู info ต่างๆแบบ real time เช่น strapi.contentTypes,strapi.contentType("key content-type")

### server structure

1. config folder
2. content-types folder => content-type ที่ generate ผูกกับ plugin
3. controllers folder (x)
4. middlewares folder
5. policies folder
6. routes folder (x)
7. services folder (x)
8. boostrap function
9. destroy function
10. index.js => export ทุกอย่างของ server app(backend ของ plugin)
11. register function

### step request for custom content type

1. send request
   - route จะ match path แล้ว call controller
   - controller จะ call service ต่อ
   - service จะ execute business logic ที่อยู่ใน service

### Step to create controller,service,route

1. สร้างไฟล์ controller ของเรา ที่ folder controllers
2. เอา controller ที่เราสร้างไป export ใช้ที่ controllers/index.js
3. สร้างไฟล์ service ของเรา ที่ folder services
4. เอา service ที่เราสร้างไป export ใช้ที่ services/index.js
5. define route ที่ routes/index.js

## Ref

- https://strapi.io/plugin-resources
- https://design-system.strapi.io/
- https://strapi.io/blog/creating-strapi-dynamic-zone-in-nuxtjs-app
- https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-admin-reset-user-password
- https://github.com/PaulBratslavsky/plugindev-intro-video-3-resources
- https://strapi.io/blog/how-to-create-a-strapi-v4-plugin-add-a-content-type-to-a-plugin-3-6
- https://docs.strapi.io/developer-docs/latest/development/backend-customization/models.html#model-attributes
- https://docs.strapi.io/developer-docs/latest/developer-resources/plugin-api-reference/server.html#entry-file
- https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/entity-service/crud.html#findone
- https://docs.strapi.io/developer-docs/latest/development/plugins-development.html#create-a-plugin
- https://strapi.io/blog/deep-filtering-alpha-26
- https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#relation-media-fields
