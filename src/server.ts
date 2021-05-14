import {Request, Response} from 'express'
import express from 'express'
import bodyParser from 'body-parser'
import bookstoreRouteHandler from './handlers/bookModelHandler'
import userModelHandler from './handlers/userInterfaceModelHandler'
const app:express.Application = express()
const address: string = "0.0.0.0:3000"

// app.use(bodyParser.json())

app.get('/', function (req: Request, res: Response) {
    res.send('Hello World!')
})

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})
userModelHandler(app)
bookstoreRouteHandler(app)