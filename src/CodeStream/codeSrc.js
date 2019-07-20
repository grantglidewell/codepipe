export default {
  0: `function debounce(callback, wait, immediate = false) {
    
  }`,
  3: `function debounce(callback, wait, immediate = false) {
    let timeout = null 

  }`,
  5: `function debounce(callback, wait, immediate = false) {
    let timeout = null 
    
    return function() {
    }
  }`,
  8: `function debounce(callback, wait, immediate = false) {
    let timeout = null 
    
    return function() {
      const callNow = immediate && !timeout
      const next = () => callback.apply(this, arguments)
    }
  }`,
  11: `function debounce(callback, wait, immediate = false) {
    let timeout = null 
    
    return function() {
      const callNow = immediate && !timeout
      const next = () => callback.apply(this, arguments)
      
      clearTimeout(timeout)
    }
  }`,
  13: `function debounce(callback, wait, immediate = false) {
    let timeout = null 
    
    return function() {
      const callNow = immediate && !timeout
      const next = () => callback.apply(this, arguments)
      
      clearTimeout(timeout)
      timeout = setTimeout(next, wait)
    }
  }`,
  15: `function debounce(callback, wait, immediate = false) {
    let timeout = null 
    
    return function() {
      const callNow = immediate && !timeout
      const next = () => callback.apply(this, arguments)
      
      clearTimeout(timeout)
      timeout = setTimeout(next, wait)
  
      if (callNow) {
        next()
      }
    }
  }`
};
