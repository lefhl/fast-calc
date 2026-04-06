import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGoodsStore = defineStore('goodsStore', () => {
  type Good = {
    title: string
    image: string
    link: string
    weigth: number
    price: number
    count: number
  }

  const mallaktoGoods = ref<Good[]>([
    {
      title: 'Тофу Классический',
      image: 'mallakto/tofu.webp',
      link: 'https://mallakto.ru/products/tofu/tofu-klassicheskii',
      weigth: 400,
      price: 100,
      count: 0,
    },
    {
      title: 'Тофу Классический 1 кг',
      image: 'mallakto/tofu-klassicheskii-1kg.webp',
      link: 'https://mallakto.ru/products/tofu/tofu-klassicheskii-1kg',
      weigth: 1000,
      price: 230,
      count: 0,
    },
    {
      title: 'Тофу Копченый',
      image: 'mallakto/tofu-kopchenyi.webp',
      link: 'https://mallakto.ru/products/tofu/tofu-kopchenyi',
      weigth: 400,
      price: 120,
      count: 0,
    },
    {
      title: 'Тофу Копченый 1кг',
      image: 'mallakto/tofu-kopchenyi.webp',
      link: 'https://mallakto.ru/products/tofu/tofu-kopchenyi',
      weigth: 1000,
      price: 290,
      count: 0,
    },
    {
      title: 'Тофу с чесноком и укропом',
      image: 'mallakto/tofu-s-chesnokom-i-ukropom.webp',
      link: 'https://mallakto.ru/products/tofu/tofu-s-chesnokom-i-ukropom',
      weigth: 400,
      price: 110,
      count: 0,
    },
    {
      title: 'Сейтан Пикантный',
      image: 'mallakto/seitan.webp',
      link: 'https://mallakto.ru/products/seitan/seitan-pikantnyi',
      weigth: 300,
      price: 150,
      count: 0,
    },
    {
      title: 'Сейтан Чикун',
      image: 'mallakto/seitan-chikun.webp',
      link: 'https://mallakto.ru/products/seitan/seitan-chikun',
      weigth: 300,
      price: 150,
      count: 0,
    },
    {
      title: 'Тофу-чечил "Кыр сосичка"',
      image: 'mallakto/kyr-sosichka.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/tofu-chechil-kyr-sosichka',
      weigth: 150,
      price: 190,
      count: 0,
    },
    {
      title: 'Вегшпроты',
      image: 'mallakto/vegshproty.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/vegshproty',
      weigth: 200,
      price: 190,
      count: 0,
    },

    {
      title: 'Тофу-бычки',
      image: 'mallakto/bychki.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/tofu-bychki',
      weigth: 200,
      price: 190,
      count: 0,
    },
    {
      title: 'Некрабовые палочки',
      image: 'mallakto/nekrabovye-palochk.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/nekrabovye-palochki',
      weigth: 150,
      price: 190,
      count: 0,
    },
    {
      title: 'Глазированный сырок с кокосовой стружкой',
      image: 'mallakto/syrok-s-kokosovoi-struzhkoi.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/glazirovannyi-syrok-s-kokosovoi-struzhkoi',
      weigth: 90,
      price: 120,
      count: 0,
    },
    {
      title: 'Глазированный сырок шоколадный с вишней',
      image: 'mallakto/syrok-vishnya.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/glazirovannyi-syrok-shokoladnyi-s-vishnei',
      weigth: 90,
      price: 120,
      count: 0,
    },
    {
      title: 'Глазированный сырок с арахисовой пастой',
      image: 'mallakto/syrok-s-arakhisovoi-pastoi.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/glazirovannyi-syrok-s-arakhisovoi-pastoi',
      weigth: 90,
      price: 120,
      count: 0,
    },
    {
      title: 'Наггетсы из тофу',
      image: 'mallakto/naggetsy.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/naggetsy-iz-tofu',
      weigth: 380,
      price: 200,
      count: 0,
    },
    {
      title: 'Темпе соевый классический',
      image: 'mallakto/tempe-klassicheskij.png',
      link: 'https://fungfung.ru/',
      weigth: 250,
      price: 300,
      count: 0,
    },
    // {
    //   title: 'Темпе соевый классический',
    //   image: 'mallakto/tempe-kopchyonyj.png',
    //   link: 'https://fungfung.ru/',
    //   weigth: 250,
    //   price: 375,
    //   count: 0,
    // },
    {
      title: 'Темпе соевый копчёный',
      image: 'mallakto/tempe-kopchyonyj.png',
      link: 'https://fungfung.ru/',
      weigth: 250,
      price: 375,
      count: 0,
    },
    {
      title: 'Темпе нутовый классический',
      image: 'mallakto/tempe-nutovyj.png',
      link: 'https://fungfung.ru/',
      weigth: 250,
      price: 350,
      count: 0,
    },
    {
      title: 'Темпе нутовый копчёный',
      image: 'mallakto/tempe-nutovyj-kopchenyj.png',
      link: 'https://fungfung.ru/',
      weigth: 250,
      price: 400,
      count: 0,
    },
    {
      title: 'Темпе гречневый классический',
      image: 'mallakto/tempe-grechnevyj.png',
      link: 'https://fungfung.ru/',
      weigth: 250,
      price: 325,
      count: 0,
    },
  ])

  return { mallaktoGoods }
})
