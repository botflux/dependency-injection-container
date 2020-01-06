import 'reflect-metadata'
import express, {Application, Request, Response} from 'express'
import './src/services'
import {createHomeRoutes} from './src/routes/createHomeRoutes'
import {container} from './container'

const PORT: string | number = process.env.PORT || 3000
const app: Application = express()

app.get('/', (req: Request, res: Response) =>
    res.send('hello'))

app.use('/products', createHomeRoutes(container))

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`))
