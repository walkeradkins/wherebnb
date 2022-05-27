'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Listings', [
    {
      userId: 1,
      address: '1000 Main St.',
      city: 'Austin',
      state: 'Texas',
      country: 'USA',
      name: 'Garden Villa',
      price: 550
    },
    {
      userId: 2,
      address: '123 Mariposa Dr.',
      city: 'Guadalajara',
      state: 'Jalisco',
      country: 'Mexico',
      name: 'Rooftop apartment with pool!',
      price: 120
    },
    {
      userId: 3,
      address: '345 Algarita',
      city: 'Los Angeles',
      state: 'California',
      country: 'USA',
      name: 'Desert Hideout ',
      price: 95
    },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.bulkDelete('Listings', null, {});
  }
};