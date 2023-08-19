'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
      {
        movie_name: 'Avengers: Endgame',
        description: 'The epic conclusion to the Infinity Saga',
        genre: 'Action/Adventure',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_name: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years',
        genre: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_name: 'Inception',
        description: 'A thief who enters the dreams of others',
        genre: 'Sci-Fi/Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_name: 'The Godfather',
        description: 'The aging patriarch of an organized crime dynasty',
        genre: 'Crime/Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_name: 'The Dark Knight',
        description: 'A vigilante known as Batman sets out to dismantle crime',
        genre: 'Action/Crime',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_name: 'Pulp Fiction',
        description: 'Various interconnected people in Los Angeles',
        genre: 'Crime/Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_name: 'Forrest Gump',
        description:
          'The life of Forrest Gump, a simple man with good intentions',
        genre: 'Drama/Comedy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_name: "Schindler's List",
        description:
          "A man's efforts to save more than a thousand Polish-Jewish refugees",
        genre: 'Biography/Drama',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_name: 'The Matrix',
        description: 'A computer programmer discovers a parallel reality',
        genre: 'Sci-Fi/Action',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        movie_name: 'Fight Club',
        description:
          'An insomniac office worker and a soapmaker form an underground fight club',
        genre: 'Drama/Thriller',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more movie entries here
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  },
};
