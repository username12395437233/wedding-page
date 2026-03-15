import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Input } from './components/ui/input'
import { Checkbox } from './components/ui/checkbox'
import { Label } from './components/ui/label'
import { Field } from './components/ui/field'
import { cn } from './lib/utils'

function App() {
  const [submitted, setSubmitted] = useState(false)
  const [end, setEnd] = useState(false)
  const [form, setForm] = useState({
    name: '',
    allergy: '',
    alcohol: {
      whiteWine: false,
      redWine: false,
      champagne: false,
      beer: false,
      whiskey: false,
      tinctures: false,
    },
  })

  const isNameValid = form.name.trim().length > 0

  const isAlcoholValid = Object.values(form.alcohol).some(Boolean)

  const isFormValid = isNameValid && isAlcoholValid

  const updateField = (key: 'name' | 'allergy', value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  const toggleAlcohol = (key: keyof typeof form.alcohol) => {
    setForm((prev) => ({
      ...prev,
      alcohol: {
        ...prev.alcohol,
        [key]: !prev.alcohol[key],
      },
    }))
  }

  const handleSubmit = async () => {
    setSubmitted(true)

    if (!isFormValid) return
    await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
    setEnd(true)
  }

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

  // await fetch('https://your-domain.com/submit', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     'X-API-Secret': 'change_me_super_secret',
  //   },
  //   body: JSON.stringify({
  //     name: 'ter',
  //     allergy: 'tre',
  //     alcohol: {
  //       whiteWine: true,
  //       redWine: false,
  //       champagne: false,
  //       beer: false,
  //       whiskey: false,
  //       tinctures: false,
  //     },
  //   }),
  // })

  return (
    <div className="relative min-h-screen w-full flex justify-center Montserrat bg-[#efe7de]">
      <img src="/back_1.png" alt="" className="fixed inset-0 h-full w-full" />

      <div className="relative z-10 w-full max-w-xl flex flex-col justify-center items-center bg-[#F7F0E8] text-center rounded-lg">
        <img src="/BantPng.png" className="w-full mt-4"></img>
        <div className="">
          <p>Приглашаем Вас</p>
          <p>на главное событие</p>
          <p>в нашей жизни - день свадьбы!</p>
        </div>
        <div className="px-6 py-10 flex flex-col items-center">
          <p className="uppercase text-6xl AnticDidone scale-y-125">
            Aleksandr
          </p>
          <img src="/1.png" className="h-10 rotate-[7deg] mb-2" />
          <p className="uppercase text-6xl AnticDidone scale-y-125">
            Ekaterina
          </p>
        </div>
        <p>Торжество состоится</p>
        <p className="text-2xl font-medium p-2 uppercase scale-y-125">
          08 | ИЮНЯ | 2026
        </p>
        <div className="h-20"></div>
        <div className="ml-14 relative w-fit">
          <img
            src="/3.png"
            className="absolute top-[-46px] left-[-80px] h-16 rotate-[8deg]"
          />
          <p className="AnticDidone text-6xl  scale-y-125">FRIENDS!</p>
        </div>
        <div className="p-3 pt-10">
          <p>Мы очень хотим оказаться в</p>
          <p>окружении самых близких и дорогих</p>
          <p>для нас людей.</p>
        </div>
        <div className="p-3 pt-5">
          <p>С огромным удовольствием</p>
          <p>приглашаем Вас разделить с нами</p>
          <p>этот праздник!</p>
        </div>
        <p className="font-medium p-4 pt-10 uppercase">до свадьбы осталось:</p>
        <div className="flex justify-between px-12 pb-10 gap-6">
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

        <img src="/line1.png" className="w-full"></img>
        <p className="AnticDidone text-6xl pt-16 scale-y-125">LOCATION</p>
        <div className="p-3 pt-6">
          <p>Выездная регистрация и праздничный</p>
          <p>ужин состоятся в банкетном зале</p>
          <p className="AnticDidone text-4xl mt-10 mb-6 scale-y-150">
            ~PANORAMA~
          </p>
          <div className="px-[38px] overflow-hidden rounded-lg mx-auto">
            <img
              src="/panorama.png"
              className="w-full h-full object-cover object-center"
              alt="Panorama"
            />
          </div>
          <div className="p-4">
            <p>микрорайон Подрезково, 1B, Химки,</p>
            <p>Московская область</p>
          </div>
          <Button className="w-fit uppercase m-2 mb-12">
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

        <div className="h-8"></div>
        <div className="relative w-fit ml-18">
          <img
            src="/finaltest.png"
            className="absolute top-[-30px] left-[-80px] h-16 w-70 rotate-[-8deg]"
          />
          <p className="AnticDidone text-6xl pl-18 scale-y-125">CODE</p>
        </div>
        <div className="p-3 pt-10">
          <p>Мы не хотим ограничивать Вас дресс-кодом,</p>
          <p>но будем рады, если Ваши образы будут в</p>
          <p>классических оттенках.</p>
        </div>
        <div>
          <img src="/Frame 14520.png" className="px-[70px]" />
        </div>
        <div className="relative w-full mt-10">
          <img src="/bantishe.png" className="absolute left-0 top-0" />

          <div className="pt-[12rem] xs:pt-[16em] gap-4 flex flex-col">
            <div>
              <p className="Playfair text-7xl text-[#371911]">16:00</p>
              <p className="text-xl text-[#371911]">сбор гостей</p>
            </div>
            <div>
              <p className="Playfair text-7xl text-[#371911]">17:00</p>
              <p className="text-xl text-[#371911]">выездная регистрация</p>
            </div>
            <div>
              <p className="Playfair text-7xl text-[#371911]">18:00</p>
              <p className="text-xl text-[#371911]">банкет</p>
            </div>
            <div>
              <p className="Playfair text-7xl text-[#371911]">22:00</p>
              <p className="text-xl text-[#371911]">завершение вечера</p>
            </div>
          </div>
        </div>
        <img src="/line2.png" className="w-full py-6"></img>

        <div className="w-full min-h-[100px]">
          {!end ? (
            <div className="w-full">
              <p className="AnticDidone text-6xl uppercase">анкета</p>
              <div className="p-3 pt-6">
                <p>Просим не дарить нам цветы — мы не успеем</p>
                <p>насладиться их красотой после праздника.</p>
                <p>По всем вопросам вы можете обратиться к:</p>
                <p className="font-medium">+7 993 271 62 92 (Tg)</p>
              </div>
              <div className="p-6">
                <p>Мы очень старались сделать этот праздник</p>
                <p>особенным, поэтому будем признательны,</p>
                <p>если вы подтвердите своё присутствие до</p>
                <p className="font-medium">15 апреля 2026 года.</p>
              </div>
              <div className="px-6 pb-4 w-full text-left">
                <p className="font-medium">
                  Ваши имя и фамилия (кол-во детей):
                </p>
                <Input
                  value={form.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  aria-invalid={submitted && !isNameValid}
                />
              </div>
              {submitted && !isNameValid && (
                <p className="text-sm text-destructive my-1 mb-2">
                  Укажите имя
                </p>
              )}
              <div className="px-6 pb-4 w-full text-left">
                <p className="font-medium">Аллергия (если есть):</p>
                <Input
                  value={form.allergy}
                  onChange={(e) => updateField('allergy', e.target.value)}
                />
              </div>
              <div className="px-4 w-full">
                <div
                  className={cn(
                    'text-left w-full px-6 flex flex-col gap-4 rounded-md p-2',
                    submitted &&
                      !isAlcoholValid &&
                      'border border-destructive rounded'
                  )}
                >
                  <p className="font-medium">Алкоголь:</p>

                  <Field orientation="horizontal">
                    <Checkbox
                      id="whiteWine"
                      checked={form.alcohol.whiteWine}
                      onCheckedChange={() => toggleAlcohol('whiteWine')}
                    />
                    <Label htmlFor="whiteWine" className="cursor-pointer">
                      Вино белое
                    </Label>
                  </Field>

                  <Field orientation="horizontal">
                    <Checkbox
                      id="redWine"
                      checked={form.alcohol.redWine}
                      onCheckedChange={() => toggleAlcohol('redWine')}
                    />
                    <Label htmlFor="redWine" className="cursor-pointer">
                      Вино красное
                    </Label>
                  </Field>

                  <Field orientation="horizontal">
                    <Checkbox
                      id="champagne"
                      checked={form.alcohol.champagne}
                      onCheckedChange={() => toggleAlcohol('champagne')}
                    />
                    <Label htmlFor="champagne" className="cursor-pointer">
                      Шампанское
                    </Label>
                  </Field>

                  <Field orientation="horizontal">
                    <Checkbox
                      id="beer"
                      checked={form.alcohol.beer}
                      onCheckedChange={() => toggleAlcohol('beer')}
                    />
                    <Label htmlFor="beer" className="cursor-pointer">
                      Пиво/сидр
                    </Label>
                  </Field>

                  <Field orientation="horizontal">
                    <Checkbox
                      id="whiskey"
                      checked={form.alcohol.whiskey}
                      onCheckedChange={() => toggleAlcohol('whiskey')}
                    />
                    <Label htmlFor="whiskey" className="cursor-pointer">
                      Виски
                    </Label>
                  </Field>

                  <Field orientation="horizontal">
                    <Checkbox
                      id="tinctures"
                      checked={form.alcohol.tinctures}
                      onCheckedChange={() => toggleAlcohol('tinctures')}
                    />
                    <Label htmlFor="tinctures" className="cursor-pointer">
                      Настойки ручной работы
                    </Label>
                  </Field>
                </div>
              </div>

              {submitted && !isAlcoholValid && (
                <p className="text-sm text-destructive">
                  Выберите хотя бы один вариант
                </p>
              )}

              <Button
                className="w-fit uppercase m-2 mt-6"
                onClick={handleSubmit}
              >
                Отправить
              </Button>
            </div>
          ) : (
            <img src="/2.png" className="pb-14 px-10 rotate-[3deg]" />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
