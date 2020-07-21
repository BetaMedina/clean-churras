module.exports = {
  dev: {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'developer',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  },
  tests: {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'testes',
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true
    }
  }
}
