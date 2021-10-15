const reducer = (globalState, action) => {
  switch (action.type) {
    case 'CREAR_USUARIO':
      return {
        ...globalState,
        authStatus: true
      }

    default:
      return globalState
  }
}

export default reducer
