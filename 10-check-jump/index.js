function checkJump(heights) {
  let maxHeight = Math.max(...heights);
  let state = true

  const dup = [...new Set(heights)]

  if (heights.length < 3 || dup.length === 1) return false

  const jump = heights.map((value, index) => {
    const prevValue = heights[index - 1] ? heights[index - 1] : 0;

    if (value === 0 && index === 0) return true
    else if (value === maxHeight && heights.length - 1 === index) return false
    else if (value === maxHeight && index === 0) return false
    else if (value === maxHeight && state) {
      state = false
      return true
    }
    else if (value < prevValue && state) return false
    else if (value > prevValue && !state) return false
    else return true

  })

  return !jump.includes(false)
}