import './setup/db'

import { server } from './setup/server'
import { queroModel } from './models/data'

server.get('/get', async (req, res) => {
  try {
    const datas = await queroModel.find()
    res.send(datas)
  } catch (error) {
    res.send(500, error)
  }
})


server.start(() => console.log('Started server'))

