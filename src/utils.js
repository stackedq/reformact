export const isEmpty = (obj) => {
  if (!obj)
    return true
  if (obj.length === 0)
    return true
  if (obj === '')
    return true
  return false
}
