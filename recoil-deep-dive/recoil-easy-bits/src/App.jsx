import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalSelector } from "./store/atoms/atoms"

function App() {

  return <div>
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  </div>
}

const MainApp = () => {

  const networkCount = useRecoilValue(networkAtom)
  const jobsCount = useRecoilValue(jobsAtom)
  const notificationCount = useRecoilValue(notificationAtom)
  const [messagesCount , setMessagesCount] = useRecoilState(messagingAtom)
  const totalCount = useRecoilValue(totalSelector)

  return <div>
    <button>Home</button>
    <button>My Network {networkCount >= 99 ? '99+' : networkCount}</button>
    <button>Jobs {jobsCount}</button>
    <button>Notifications {notificationCount}</button>
    <button onClick={ () => {setMessagesCount(messagesCount + 1)}}>Messages {messagesCount}</button>
    <button>Me {totalCount}</button>
  </div>
}

export default App
