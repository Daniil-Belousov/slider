import { setNav, setPag, setLoop, setAuto, setDelay, setStopMouseHover } from "@src/reducers/mainSlice"

const switchActions = (option: string, value?: number) => {
  switch(option) {
    case 'pagination': {
      return setPag();
    }

    case 'loop': {
      return setLoop();
    }

    case 'auto': {
      return setAuto();
    }

    case 'delay': {
      return setDelay(value);
    }

    case 'stopMouseHover': {
      return setStopMouseHover();
    }

    default: {
      return setNav();
    }
  }
}

export default switchActions