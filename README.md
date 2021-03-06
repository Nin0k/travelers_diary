## **Дневник путешественника**

#### **Макет проекта**
https://ninjamock.com/s/JMT86Hx

#### **Идея проекта**
Дневник путешественника - это travel-блог о самостоятельных путешествиях. Вы можете делиться с другими людьми своими поездками и выбрать место для следующего путешествия.

#### **Инструкция**
На странице "Главная" пользователь может подобрать тур, в зависимости от своих предпочтений. Туры будут формироваться администратором из наиболее популярных мест и направлений. Поиск будет осуществляться по названию курорта, стране и тегам (морской курорт, горный, много достопремичательностей, преобладает активный отдых или больше подходит для отдыха с детьми).

На странице "Новости" отображаются места от пользователей. Где они побывали с описанием этого места, какие плюсы и минусы там. Можно будет кликнуть на имя пользователя и просмотреть все его места. Или на название курорта, откроются все отзывы об этом месте.

"Мой дневник" позволяет просматривать свои места, добавлять новые.
К каждому месту можно будет добавить фотографию, теги, описание, оценку.

____
## **Available Scripts**

#### **npm run dev**
Runs the server in the development mode on http://localhost:5000.
____

## **Available routes**

#### **http://localhost:5000/api/getinfo/all**
Return all record in db for Resort model

____

#### **http://localhost:5000/api/getinfo/:id**
Return one record for :id

____

## **Resort model**
```
{
 _id: String,
 tags: [String],
 country: String,
 location: String,
 description: String,
 image?: TBD
}
```
