module.exports = {
  mysqlTruncate (model) {
    model.destroy({ truncate: { cascade: true } })
  }
}
