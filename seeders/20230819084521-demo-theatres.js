'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    return queryInterface.bulkInsert('Theatres', [
      {
        theatre_name: 'Cineplex',
        location: 'Downtown',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theatre_name: 'Mega Movies',
        location: 'West End',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      {
        theatre_name: 'Star Cinemas',
        location: 'East Side',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theatre_name: 'Sunset Cinemas',
        location: 'North Side',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theatre_name: 'Golden Theatres',
        location: 'Central City',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theatre_name: 'Sunrise Cinema',
        location: 'South Side',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theatre_name: 'The Royal Theater',
        location: 'Uptown',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theatre_name: 'Hollywood Cinema',
        location: 'Hollywood Hills',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theatre_name: 'Metroplex',
        location: 'Metro City',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        theatre_name: 'Riverside Movies',
        location: 'Riverside',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more theatre entries here
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
