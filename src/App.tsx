import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Button } from '@/components/ui/button'
import { Input } from './components/ui/input'

function App() {
  return (
    <div className="w-full flex justify-center ">
      <div className="max-w-xl flex flex-col">
        <img src="/public/bantic.png"></img>
        <div className="flex flex-col">
          <p>Приглашаем Вас</p>
          <p>на главное событие</p>
          <p>в нашей жизни - день свадьбы!</p>
        </div>
        <div className="mark">
          <span className="dear">Dear</span>
          <span className="friends">FRIENDS!</span>
        </div>
        <Input></Input>
        Sasha Katya
        <Button>Click me</Button>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}

export default App
