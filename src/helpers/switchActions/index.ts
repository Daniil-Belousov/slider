import { StateI } from "@src/types";

interface PropsI {
  state: StateI,
  setState: (state: StateI) => void,
  option: string,
  value?: number
}

const switchActions = ({state, setState, option, value}: PropsI) => {

  switch(option) {
    case 'pagination': {
      setState({...state, settings: {
        ...state.settings, pagination: !state.settings.pagination
      }})
      break;
    }

    case 'loop': {
      setState({...state, settings: {
        ...state.settings, loop: !state.settings.loop
      }})
      break;
    }

    case 'auto': {
      setState({...state, settings: {
        ...state.settings, auto: !state.settings.auto
      }})
      break;
    }

    case 'delay': {
      if(value) {
        setState({...state, settings: {
          ...state.settings, delay: value
        }})
      }
      break;
    }

    case 'stopMouseHover': {
      setState({...state, settings: {
        ...state.settings, stopMouseHover: !state.settings.stopMouseHover
      }})
      break;
    }

    default: {
      setState({...state, settings: {
        ...state.settings, navigation: !state.settings.navigation
      }})
      break;
    }
  }
}

export default switchActions