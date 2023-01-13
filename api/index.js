const app = require('./app.js')
require('./databases/db.js')

app.listen(3001, () => console.log('Servidor corriendo en ==> http://localhost:3000 ✅✅✅'))