module.exports = function bool_it_up (val) {
  if (typeof val === 'boolean') {
    return val
  }
  if (typeof val === 'string') {
    if (/^(true|false)$/i.test(val)) {
      return val.toLowerCase() === 'true'
    }
    if (/^(0|1)$/.test(val)) {
      return val === '1'
    }
    if (/^(y|n)$/i.test(val)) {
      return val.toLowerCase() === 'y'
    }
    if (/^(yes|no)$/i.test(val)) {
      return val.toLowerCase() === 'yes'
    }
  }
  if (typeof val === 'number') {
    if (val === -1) {
      return false
    }
    return !!val
  }
  if (Array.isArray(val)) {
    return val.length > 0
  }
  if (typeof val === 'object') {
    return Object.keys(val).length > 0
  }
  return !!val
}
