const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://matias34:matias34@cluster0.svf5ggi.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Conectado a la base de datos πππ'))
.catch(() => console.log('FallΓ³ la conexion!!!'))