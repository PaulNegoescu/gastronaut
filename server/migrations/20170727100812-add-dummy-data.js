// 'use strict';

// const Sequelize = require('../../node_modules/sequelize');
// const sequelize = new Sequelize('database', 'username', 'password');

// const Ingredients = sequelize.define('ingredient', {
//   name: Sequelize.STRING,
//   image: Sequelize.STRING
// });

// Ingredients.bulkCreate([
//   {
//     name: 'Faina',
//     image: 'https://www.danyelle.ro/images/2016/02/12/Faina_Paste_Fainoase.jpg'
//   },
//   {
//     name: 'Oua',
//     image: 'http://infoeuri.criosweb.ro/blog/wp-content/uploads/2014/06/oua-940x576.jpg'
//   },
//   {
//     name: 'Lapte',
//     image: 'http://infoeuri.criosweb.ro/blog/wp-content/uploads/2015/03/lapte-1038x576.jpg'
//   },
//   {
//     name: 'Zahar',
//     image: 'http://www.chefcruceanu.ro/wp-content/uploads/2015/08/Zahar-cuburi.jpg'
//   },
//   {
//     name: 'Sare',
//     image: 'https://renasterea.ro/ro/wp-content/uploads/sare-1.jpg'
//   },
//   {
//     name: 'Unt',
//     image: 'http://bucurestifm.ro/wp-content/uploads/sites/2/2014/10/Unt.jpg'
//   },
//   {
//     name: 'Ulei',
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSK05RshUIAWITohG0-QzQoWOQN6RhY_NGieFFGD-OvJZSyQIr'
//   },
//   {
//     name: 'Orez',
//     image: 'https://minnakenko.jp/wp-content/uploads/2015/08/%E7%B1%B3.jpg'
//   },
//   {
//     name: 'Scortisoara',
//     image: 'http://assets.sport.ro/assets/foodstory/2013/11/28/image_galleries/3470/40-de-utilizari-pentru-scortisoara_size1.jpg'
//   },
//   {
//     name: 'Cacao',
//     image: 'http://poesie34.altervista.org/wp-content/uploads/2017/02/semi-di-cacao.jpg'
//   },
//   {
//     name: 'Praf de copt',
//     image: 'http://az809444.vo.msecnd.net/image/274652/636x380/0/praf-de-copt-original-backin.png'
//   },
//   {
//     name: 'Vanilie',
//     image: 'http://blog.vegis.ro/wp-content/uploads/2013/09/vanilie-cover01.jpg'
//   },
//   {
//     name: 'Ciocolata neagra',
//     image: 'http://storage0.dms.mpinteractiv.ro/media/401/321/5109/5795040/1/ciocolata.jpg?width=618&height=361'
//   },
//   {
//     name: 'Ciocolata alba',
//     image: 'https://www.chocolade-paradijs.nl/uploads/images/1930.jpg'
//   },
//   {
//     name: 'Smantana / Frisca',
//     image: 'https://pioneerwoman.files.wordpress.com/2015/11/homemade-whipped-cream-4-ways-13.jpg'
//   },
//   {
//     name: 'Gelatina',
//     image: 'https://www.organicfacts.net/wp-content/uploads/gelatin.jpg'
//   },
//   {
//     name: 'Apa',
//     image: 'http://dreamicus.com/data/water/water-08.jpg'
//   },
//   {
//     name: 'Zmeura',
//     image: 'http://cdn1.medicalnewstoday.com/content/images/articles/283/283018/raspberries.jpg'
//   },
//   {
//     name: 'Miere',
//     image: 'http://dreamicus.com/data/honey/honey-02.jpg'
//   },
//   {
//     name: 'Colorant alimentar',
//     image: 'https://www.kimbertonwholefoods.com/wp-content/uploads/2017/04/food-coloring.jpeg'
//   }


// ]).then(() => { // Notice: There are no arguments here, as of right now you'll have to...
//   return Ingredients.findAll();
// }).then(ingredients => {
//   console.log(ingredients) // ... in order to get the array of user objects
// });

