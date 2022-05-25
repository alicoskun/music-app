import formatDuration from "format-duration"

export const formatTime = (timeInSeconds = 0) => {
  return formatDuration(timeInSeconds * 1000)
}

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export const toFixedNumber = (num, digits) => {
  const pow = Math.pow(10, digits)
  return Math.round(num * pow) / pow
}
