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
