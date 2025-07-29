import { Wallet } from "lucide-react"
import { Badge, Button } from "@ui"
import { useWallet } from "hooks/wallet"
import { walletAtom } from "utils/wallet"
import { useRecoilValue } from "recoil"
const Navbar = () =>{
    const {connectWallet} = useWallet()
const wallet = useRecoilValue(walletAtom)
    return(
      <header className="flex justify-between items-center p-6 backdrop-blur-md bg-gray-900/50 border-b border-gray-800">
      <div className="flex items-center space-x-4">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
          CYBER PONG
        </div>
        <Badge variant="outline" className="border-green-400 text-green-400">
          Web3 Gaming
        </Badge>
      </div>
      <Button
    onClick={()=>
            {
              if(wallet === null){
                connectWallet()
              }
            }
            }
            
        className={`${
            wallet?.connected ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
        } transition-all duration-300`}
      >
        <Wallet className="w-4 h-4 mr-2" />
        {wallet?.connected ? "Connected" : "Connect Wallet"}
      </Button>
    </header>
    )
}
export default Navbar