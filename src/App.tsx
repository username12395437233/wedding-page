import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Input } from './components/ui/input'
import { Checkbox } from './components/ui/checkbox'
import { Label } from './components/ui/label'
import { Field } from './components/ui/field'

function App() {
  const yandexMapUrl =
    'https://yandex.ru/maps/213/moscow/?ll=37.334645%2C55.935513&mode=poi&poi%5Bpoint%5D=37.334135%2C55.935348&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D110577858940&z=18.1'

  const targetDate = new Date('2026-06-08T16:30:00')

  const calculateTimeLeft = () => {
    const now = new Date()
    const diff = targetDate.getTime() - now.getTime()

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full flex justify-center Montserrat">
      <div className="w-full max-w-xl flex flex-col justify-center items-center bg-[#F7F0E8] text-center rounded-lg">
        <img src="/public/BantPng.png" className="h-full"></img>
        <div className="text-xs">
          <p>Приглашаем Вас</p>
          <p>на главное событие</p>
          <p>в нашей жизни - день свадьбы!</p>
        </div>
        <div className="p-6">
          <p className="uppercase text-6xl AnticDidone">Aleksandr</p>
          <p className="BonheurRoyale text-xs">lovelovelovelovelove</p>
          {/* TODO IMG */}
          <p className="uppercase text-6xl AnticDidone">Ekaterina</p>
        </div>
        <p>Торжество состоится</p>
        <p className="font-medium p-2 uppercase">08 | ИЮНЯ | 2026</p>
        <div>
          <p className="BonheurRoyale text-9xl font-thin">Dear</p>
          <p className="AnticDidone text-6xl">FRIENDS!</p>
        </div>
        <div className="p-3">
          <p>Мы очень хотим оказаться в</p>
          <p>окружении самых близких и дорогих</p>
          <p>для нас людей.</p>
        </div>
        <div className="p-3">
          <p>С огромным удовольствием</p>
          <p>приглашаем Вас разделить с нами</p>
          <p>этот праздник!</p>
        </div>
        <p className="font-medium p-4 uppercase">до свадьбы осталось:</p>
        <div className="flex justify-between px-12 gap-6">
          <div className="flex flex-col text-center">
            <p className="font-medium">{timeLeft.days}</p>
            <p>Дней</p>
          </div>
          <div className="flex flex-col text-center">
            <p className="font-medium">{timeLeft.hours}</p>
            <p>Часов</p>
          </div>
          <div className="flex flex-col text-center">
            <p className="font-medium">{timeLeft.minutes}</p>
            <p>Минут</p>
          </div>
          <div className="flex flex-col text-center">
            <p className="font-medium">{timeLeft.seconds}</p>
            <p>Секунд</p>
          </div>
        </div>
        <p className="AnticDidone text-6xl pt-8">LOCATION</p>
        <div className="p-3">
          <p>Выездная регистрация и праздничный ужин</p>
          <p>состоятся на загородной площадке.</p>
          <p className="AnticDidone text-3xl pt-6">~PANORAMA~</p>
          <div className="w-64 h-64 overflow-hidden rounded-lg mx-auto">
            <img
              src="/public/panorama.png"
              className="w-full h-full object-cover object-center"
              alt="Panorama"
            />
          </div>
          <Button className="w-fit uppercase m-2">
            <a
              href={yandexMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center"
            >
              Открыть карту <ArrowRight />
            </a>
          </Button>
        </div>

        <div>
          <p className="BonheurRoyale text-9xl font-thin">Dress</p>
          <p className="AnticDidone text-6xl">Code</p>

          <div className="p-3">
            <p>Будем очень благодарны, если Вы</p>
            <p>поддержите стиль нашей свадьбы</p>
            <p>в своих нарядах</p>
          </div>
          <div>
            <p className="BonheurRoyale text-6xl font-thin p-4 text-left">
              ladies:
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="w-36 h-72 overflow-hidden rounded-lg">
                <img
                  src="/public/panorama.png"
                  className="w-full h-full object-cover object-center"
                  alt="Panorama"
                />
              </div>
              <div className="w-36 h-72 overflow-hidden rounded-lg">
                <img
                  src="/public/panorama.png"
                  className="w-full h-full object-cover object-center"
                  alt="Panorama"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="BonheurRoyale text-6xl font-thin p-4 text-left">
              gentlements:
            </p>
            <div className="flex justify-center items-center gap-4">
              <div className="w-36 h-72 overflow-hidden rounded-lg">
                <img
                  src="/public/panorama.png"
                  className="w-full h-full object-cover object-center"
                  alt="Panorama"
                />
              </div>
              <div className="w-36 h-72 overflow-hidden rounded-lg">
                <img
                  src="/public/panorama.png"
                  className="w-full h-full object-cover object-center"
                  alt="Panorama"
                />
              </div>
            </div>
          </div>
        </div>
        <p className="BonheurRoyale text-9xl font-thin">Details</p>
        <div className="p-3">
          <p>Если хотите подарить нам цветы</p>
          <p>или другие вещи то можно заказать</p>
          <p>по адресу: БА85к2, ....</p>
        </div>

        <img src="/public/BantPng.png" className="h-full"></img>
        <p className="AnticDidone text-6xl uppercase">анкета</p>
        <div className="p-3">
          <p>Мы очень старались сделать праздник</p>
          <p>незабываемым, поэтому будем рады,</p>
          <p>если вы подтвердите свое</p>
          <p>присутствие до 15.04.2026</p>
        </div>
        <div className="px-6 pb-4 w-full text-left">
          <p>Ваши имя и фамилия:</p>
          <Input></Input>
        </div>
        <div className="px-6 pb-4 w-full text-left">
          <p>Если будете с парой напишите имя и фамилию партнера:</p>
          <Input></Input>
        </div>
        <div className="text-left w-full px-6 flex flex-col gap-4">
          <p>Ваши предпочтения по напиткам:</p>
          <Field orientation="horizontal">
            <Checkbox id="terms-checkbox" name="terms-checkbox" />
            <Label htmlFor="terms-checkbox">Вино красное</Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="terms-checkbox1" name="terms-checkbox1" />
            <Label htmlFor="terms-checkbox1">Шампанское</Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="terms-checkbox2" name="terms-checkbox2" />
            <Label htmlFor="terms-checkbox2">Водка</Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="terms-checkbox3" name="terms-checkbox3" />
            <Label htmlFor="terms-checkbox3">Виски</Label>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="terms-checkbox4" name="terms-checkbox4" />
            <Label htmlFor="terms-checkbox4">Самогон</Label>
          </Field>
        </div>

        <Button className="w-fit uppercase m-2 my-6">
          <a
            href={yandexMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center"
          >
            Отправить <ArrowRight />
          </a>
        </Button>
        <p className="BonheurRoyale text-4xl font-thin">
          All you need is love....
        </p>
      </div>
    </div>
  )
}

export default App
