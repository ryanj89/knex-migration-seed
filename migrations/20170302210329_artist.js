
exports.up = (knex, Promise) => {
  return knex.schema.createTable('artist', (artist) => {
    artist.increments()
    artist.text('name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('artist')
}
