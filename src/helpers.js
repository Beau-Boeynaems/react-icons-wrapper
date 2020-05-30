const getIndexOfSecondUppercaseChar = (text) => {
  let index = 0
  let numberOfUppercaseChars = 0

  while (index <= text.length) {
    if (text.charAt(index) === text.charAt(index).toUpperCase()) {
      numberOfUppercaseChars = numberOfUppercaseChars + 1
    }

    if (numberOfUppercaseChars === 2) {
      break
    }

    index = index + 1
  }

  return index
}

const loadIcons = (name) => {
  const index = getIndexOfSecondUppercaseChar(name)

  if (index === name.length) return null

  const iconLib = name.substring(0, index).toLowerCase()
  switch (iconLib) {
    case 'ai':
      return require('react-icons/ai')
    case 'bs':
      return require('react-icons/bs')
    case 'di':
      return require('react-icons/di')
    case 'fa':
      return require('react-icons/fa')
    case 'fc':
      return require('react-icons/fc')
    case 'fi':
      return require('react-icons/fi')
    case 'gi':
      return require('react-icons/gi')
    case 'go':
      return require('react-icons/go')
    case 'gr':
      return require('react-icons/gr')
    case 'io':
      return require('react-icons/io')
    case 'md':
      return require('react-icons/md')
    case 'ri':
      return require('react-icons/ri')
    case 'ti':
      return require('react-icons/ti')
    case 'wi':
      return require('react-icons/wi')
    default:
      return null
  }
}

export const getIcon = (name) => {
  const icons = loadIcons(name)

  if (!icons) return null
  return icons[name]
}
