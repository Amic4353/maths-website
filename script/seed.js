'use strict'

const db = require('../server/db')
const {User, Class, ClassDetail} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123', admin: false}),
    User.create({email: 'murphy@email.com', password: '123', admin: true})
  ])

  const classes = await Promise.all([
    Class.create({
      name: 'Free Preparation Class for 6th Year Higher'
    }),
    Class.create({name: 'Maths Blitz'}),
    Class.create({name: 'Leaving Certs Maths'}),
    Class.create({name: 'Junior Certs Maths'})
  ])

  const classDetails = await Promise.all([
    ClassDetail.create({
      date: 'Thursday 22 Aug: 12:00-15:00',
      seats: 34,
      emptySeats: 34,
      classId: 2
    }),
    ClassDetail.create({
      date: 'Thursday 24 Aug: 12:00-15:00',
      seats: 34,
      emptySeats: 34,
      classId: 2
    }),
    ClassDetail.create({
      date: 'Thursday 29 Aug: 12:00-15:00',
      seats: 34,
      emptySeats: 34,
      classId: 2
    }),
    ClassDetail.create({
      date: 'Saturday 6 June 2020: Paper 1',
      seats: 34,
      emptySeats: 34,
      classId: 1
    }),
    ClassDetail.create({
      date: 'Saturday 13 June 2020: Paper 2',
      seats: 34,
      emptySeats: 34,
      classId: 1
    }),
    ClassDetail.create({
      date: 'Wednesday Evenings - 4 Sept: 17:00 - 18:15',
      seats: 34,
      emptySeats: 34,
      classId: 4
    }),
    ClassDetail.create({
      date: 'Wednesday Evenings - 4 Sept: 18:30 - 19:20',
      seats: 34,
      emptySeats: 34,
      classId: 3
    }),
    ClassDetail.create({
      date: 'Wednesday Evenings - 4 Sept: 20:00 - 21:20',
      seats: 34,
      emptySeats: 34,
      classId: 3
    }),
    ClassDetail.create({
      date: 'Thursday Evenings - 5 Sept: 17:00 - 18:20',
      seats: 34,
      emptySeats: 34,
      classId: 3
    }),
    ClassDetail.create({
      date: 'Thursday Evenings - 5 Sept: 18:30 - 19:50',
      seats: 34,
      emptySeats: 34,
      classId: 3
    }),
    ClassDetail.create({
      date: 'Thursday Evenings - 5 Sept: 20:00 - 21:20',
      seats: 34,
      emptySeats: 34,
      classId: 3
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${classes.length} classes`)
  console.log(`seeded ${classDetails.length} classes details`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
