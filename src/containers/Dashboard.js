import React, { Component } from 'react'
import { connect } from 'react-redux'

import counterDucks from 'reducers/counter'

import Counter from 'components/Counter'

class Dashboard extends Component {
  render() {
    const {
      counter: { count },
      addCount,
      removeCount,
      addCountFromServer,
      addCountToSocket,
      addListenerCountFromSocket,
      removeListenerCountFromSocket
    } = this.props

    return (
      <div>
        <h1>Counter</h1>
        <Counter
          addCount={addCount}
          addCountFromServer={addCountFromServer}
          addCountToSocket={addCountToSocket}
          addListenerCountFromSocket={addListenerCountFromSocket}
          count={count}
          removeCount={removeCount}
          removeListenerCountFromSocket={removeListenerCountFromSocket} />
      </div>
    )
  }
}

export default connect(
  ({ counter }) => ({ counter }),
  {
    addCount                     : counterDucks.creators.addCount,
    removeCount                  : counterDucks.creators.removeCount,
    addCountFromServer           : counterDucks.creators.addCountFromServer,
    addCountToSocket             : counterDucks.creators.addCountToSocket,
    addListenerCountFromSocket   : counterDucks.creators.addListenerCountFromSocket,
    removeListenerCountFromSocket: counterDucks.creators.removeListenerCountFromSocket
  }
)(Dashboard)
