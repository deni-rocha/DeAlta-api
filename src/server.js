const app = require('./App')

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}`))
