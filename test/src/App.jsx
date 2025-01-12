import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { networkAtom } from "./atoms"

function App() {

  return <div>
    <RecoilRoot>
      <NavBar/>
    </RecoilRoot>
  </div>
}

const NavBar = () => {

  const navBarNetwork = useRecoilValue(networkAtom)
  return <div>
    <button>Home</button>
    <button>My network ({navBarNetwork.network})</button>
    <button>Jobs ({navBarNetwork.jobs})</button>
    <button>Messages ({navBarNetwork.messaging})</button>
    <button>Notifications ({navBarNetwork.notifications})</button>
    <button>Me</button>
  </div>
}

export default App
