import './App.css'
import gon_desesperado from './IMG/gon_desesperado.jpg'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    // const formatUserName = (userName) => `@${userName}`
    return(
        <div className='App'>
            <TwitterFollowCard userName="Joshualml">
                Joshua Esquivel Larraguivel
            </TwitterFollowCard>
            <TwitterFollowCard userName="imdalis">
                Alberto saens
                </TwitterFollowCard> 
            <TwitterFollowCard userName="Juan">
                Juanito locochon
            </TwitterFollowCard> 
        </div>
    )
}