const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://default:CqLKY3X0NcJE@ep-floral-frog-a2tl7heu-pooler.eu-central-1.aws.neon.tech:5432/verceldb?sslmode=require')

var createTable = `CREATE TABLE exercises (
    exercise_id integer, 
    name varchar(40), 
    PRIMARY KEY(exercise_id));`


db.one(createTable, 123)
  .then((data) => {
    console.log('DATA:', data.value)
  })
  .catch((error) => {
    console.log('ERROR:', error)
  })
