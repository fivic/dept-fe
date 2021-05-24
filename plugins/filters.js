export default ({ app }, inject) => {
  const offsetToMinutes = (offset) => {
    const [h, m] = offset.split(':')
    const minutes = parseInt(h * 60) + parseInt(m) || 0
    return minutes
  }

  const filters = {
    offsetToMinutes,
  }
  inject('filters', filters)
}
