import { router as files } from '../Modules/Files/index.js'

export default function useRouter(app) {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    res.header('Access-Control-Allow-Methods', '*')
    next()
  })

  app.use('/files', files)
}
