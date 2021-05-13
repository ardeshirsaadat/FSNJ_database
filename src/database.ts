import dotenv from 'dotenv'
import {Pool} from 'pg'

dotenv.config()
const {
  Database,
  Username,
  Port,
  PostgresHost,
  Database_test,
  ENV
}= process.env
let client
console.log(ENV)
if(ENV === 'test') {
  client = new Pool({
    host: PostgresHost,
    database: Database,
    user: Username,
    port:Number(Port)
  })
}

if(ENV === 'dev') {
  client = new Pool({
    host: PostgresHost,
    database: Database_test,
    user: Username,
    port:Number(Port)
  })
}
export default client