
exports.up = (knex, Promise) => {
  return knex.schema.createTable('track', (track) => {
    track.increments()
    track.text('name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('track')
}
