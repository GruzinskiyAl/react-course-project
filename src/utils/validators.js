import {
  isRequired,
  combineValidators,
  composeValidators,
  isAlphabetic,
  isNumeric,
  hasLengthBetween
} from 'revalidate'


export const formValidator = combineValidators({
  name: composeValidators(
    isRequired,
    isAlphabetic,
    hasLengthBetween(3, 20)
  )('Name'),
  price: composeValidators(
    isNumeric,
    isRequired,
  )('Price'),
  origin: isRequired('Origin')
});