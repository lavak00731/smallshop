import { MemoryRouter } from 'react-router'
import { RouterComp } from './../../routes/RouterComp'
import { Provider } from 'react-redux'
import { store } from './../../store/store'

function AppMock({route}) {
  return (
    <>
      <Provider store={store}>
        <MemoryRouter initialEntries={[`/${route}`]}>        
            <RouterComp />                
        </MemoryRouter>
      </Provider>
    </>
  )
}

export default AppMock