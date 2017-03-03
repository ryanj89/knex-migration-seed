
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('track').del()
    .then(() => {
      // Inserts seed entries
      return knex('track').insert([
        {id: 1, name: 'Drive'},
        {id: 2, name: 'Bass Head'},
        {id: 3, name: 'The Fix'},
        {id: 4, name: 'No Mercy'},
        {id: 5, name: 'Zodgilla'}
      ])
    })
}
