const switchOptions = (option: string) => {
  switch(option) {
    case 'pagination': {
      return 'Pagination'
    }

    case 'loop': {
      return 'Infinity loop'
    }

    case 'auto': {
      return 'Autoplay'
    }

    case 'delay': {
      return 'Delay'
    }

    case 'stopMouseHover': {
      return 'Stop on mouse hover'
    }

    default: {
      return 'Navigation'
    }
  }
}

export default switchOptions