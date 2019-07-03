// src/index.ts
import 'reflect-metadata'
import {createKoaServer} from "routing-controllers"
import AdvertisementsController from "./advertisements/controller"
import setUpDb from './db'
import UserController from './users/controller'
import LoginController from './logins/controller'
import {Action} from 'routing-controllers'
import { verify } from './jwt';

const port = process.env.PORT || 4000

const app = createKoaServer({
    cors: true,
    controllers: [AdvertisementsController, UserController, LoginController],

    authorizationChecker: (action: Action) => {
        const header: string = action.request.headers.authorization
      
        if (header && header.startsWith('Bearer ')) {
          const [ , token ] = header.split(' ')
          return !!(token && verify(token))
        }
        // ...
        return false
      }
})

setUpDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))