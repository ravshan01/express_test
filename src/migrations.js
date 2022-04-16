import { migration as FilesMigration } from './Modules/Files/index.js'
;(async function startMigation() {
  console.log('Start migrations ...\n')

  try {
    await FilesMigration()
    console.log('\nFiles migration success finished')
  } catch (err) {
    console.error('\nFiles migration failed', err)
  }

  process.exit(1)
})()
