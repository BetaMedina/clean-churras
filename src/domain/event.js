class Event {
  constructor ({ name, description, date, obs, suggestedValue, withDrink }) {
    this.name = name
    this.description = description
    this.date = date
    this.obs = obs
    this.suggested_value = suggestedValue
    this.with_drink = withDrink
  }
}

module.exports = { Event }
