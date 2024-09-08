import { useRoutes } from 'react-router-dom'
import { AppSwrapper } from './style'

import routes from './router'
import { Provider } from 'react-redux'
import store from './store'

function App() {

  const element = useRoutes(routes)
  return (
    <>
      <Provider store={store} >
        <AppSwrapper>{element}</AppSwrapper>
      </Provider>

    </>
  )
}

export default App