var recipes = {
  protein: 'eggs',
  seasoning: 'garlic salt',
  veggies: 'broccoli',
  filling: 'cheddar cheese'
};

function updateObjectWithKeyAndValue(object, key, value) {
  recipes['otherVeggie'] = 'onion'
  return recipes;
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
