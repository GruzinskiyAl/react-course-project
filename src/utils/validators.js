import {
  isRequired,
  combineValidators,
  composeValidators,
  isNumeric,
  hasLengthBetween
} from 'revalidate'

export const formValidator = combineValidators({
  name: composeValidators(
    isRequired,
    hasLengthBetween(3, 20)
  )('Name'),
  price: composeValidators(
    isRequired,
    isNumeric,
    value => value > 0
  )('Price'),
  origin: isRequired('Origin')
});
