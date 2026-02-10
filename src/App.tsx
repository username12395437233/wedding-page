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
      <div className="max-w-xl flex flex-col bg-amber-300">
        <img src="/public/bantic.png"></img>
        Приглашаем Вас на главное событие в нашей жизни - день свадьбы!
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
