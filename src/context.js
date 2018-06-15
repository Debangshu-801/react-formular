import React from 'react'

const { Provider: DataProvider, Consumer: DataConsumer } = React.createContext({
  update: null,
  data: null
})
const { Provider: ErrorProvider, Consumer: ErrorConsumer } = React.createContext({
  errors: {}
})

export {
  DataConsumer,
  DataProvider,
  ErrorConsumer,
  ErrorProvider
}
