# Readme

I started to look at https://www.fruityvice.com/#1 for this task
This API can retrieve interesting data from any fruit of your choosing.
You are also allowed to add fruits to the database if they don't currently have the one that you are looking for. This has to be approved by the admins of the API.
The shown data is based on 100g of said fruit.
You can call the API with https://www.fruityvice.com/api/fruit/all and then call certain fruits by changing the name of the fruit at the end, eg. https://www.fruityvice.com/api/fruit/banana
This will show you:
{ "genus": "Musa", "name": "Banana", "id": 1, "family": "Musaceae", "order": "Zingiberales", "nutritions": { "carbohydrates": 22, "protein": 1, "fat": 0.2, "calories": 96, "sugar": 17.2 } }
This is an object containing strings, numbers and an object for all the nutrional values.
Overall I found this a fun and simple to use API. It's very informative without being overbearing in its information and I think it's quite a funky idea.
