module.exports = Franz => {
  const getMessages = () => {
    const element = document.querySelector('[href="/notifications"] > div')
    const content = window
      .getComputedStyle(element, ':after')
      .getPropertyValue('content')
      .match(/\d+/)
    const notifications = Number(content)

    Franz.setBadge(notifications)
  }

  Franz.loop(getMessages)
}
