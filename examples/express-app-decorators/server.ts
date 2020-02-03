import 'reflect-metadata'
import express, {Application, Request, Response} from 'express'
import './src/services'
import {createHomeRoutes} from './src/routes/createHomeRoutes'
import {Logger, ProductProxy} from './src/services'
import {ServiceContainerFactory} from '@botflx/dependency-injection-container'

const PORT: string | number = process.env.PORT || 3000
const app: Application = express()

app.get('/', (req: Request, res: Response) =>
    res.send('hello'))

const container = new ServiceContainerFactory({ useReflection: true })
    .create()
    .add('logger', Logger)
    .add('productProxy', ProductProxy)

app.use('/products', createHomeRoutes(container))

app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`))
