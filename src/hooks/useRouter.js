import { router as files } from '../Modules/Files'

export default function useRouter(app) {
  app.use('/files', files)
}
