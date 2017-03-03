
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(() => {
      // Inserts seed entries
      return knex('artist').insert([
        { id: 1, name: 'Incubus' },
        { id: 2, name: 'Minus the Bear' },
        { id: 3, name: 'Bassnectar' },
        { id: 4, name: 'Pretty Lights' },
        { id: 5, name: 'Rusko' }
      ])
    })
}
