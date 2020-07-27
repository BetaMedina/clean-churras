class Event {
  constructor ({ name, description, date, obs, suggestedValue, withDrink, numberPeople }) {
    this.name = name
    this.description = description
    this.date = new Date(date)
    this.obs = obs
    this.suggested_value = suggestedValue
    this.number_people = numberPeople

    this.with_drink = withDrink
  }
}

module.exports = { Event }
