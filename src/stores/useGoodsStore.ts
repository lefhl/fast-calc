import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Good } from '@/types/goods'
import { formatNumberToAmount } from '@/view/__shared/utils/amount.utils'

export const useGoodsStore = defineStore('goodsStore', () => {
  const mallaktoGoods = ref<Good[]>([
    {
      title: 'Тофу Классический',
      image: 'mallakto/tofu.webp',
      link: 'https://mallakto.ru/products/tofu/tofu-klassicheskii',
      weigth: 400,
      price: 100,
      count: 0,
      comission: 15,
    },
    {
      title: 'Тофу Классический 1 кг',
      image: 'mallakto/tofu-klassicheskii-1kg.webp',
      link: 'https://mallakto.ru/products/tofu/tofu-klassicheskii-1kg',
      weigth: 1000,
      price: 230,
      count: 0,
      comission: 25,
    },
    {
      title: 'Тофу Копченый',
      image: 'mallakto/tofu-kopchenyi.webp',
      link: 'https://mallakto.ru/products/tofu/tofu-kopchenyi',
      weigth: 400,
      price: 120,
      count: 0,
      comission: 15,
    },
    {
      title: 'Тофу Копченый 1кг',
      image: 'mallakto/tofu-kopchenyi.webp',
      link: 'https://mallakto.ru/products/tofu/tofu-kopchenyi',
      weigth: 1000,
      price: 290,
      count: 0,
      comission: 25,
    },
    {
      title: 'Тофу с чесноком и укропом',
      image: 'mallakto/tofu-s-chesnokom-i-ukropom.webp',
      link: 'https://mallakto.ru/products/tofu/tofu-s-chesnokom-i-ukropom',
      weigth: 400,
      price: 110,
      count: 0,
      comission: 15,
    },
    {
      title: 'Сейтан Пикантный',
      image: 'mallakto/seitan.webp',
      link: 'https://mallakto.ru/products/seitan/seitan-pikantnyi',
      weigth: 300,
      price: 150,
      count: 0,
      comission: 15,
    },
    {
      title: 'Сейтан Чикун',
      image: 'mallakto/seitan-chikun.webp',
      link: 'https://mallakto.ru/products/seitan/seitan-chikun',
      weigth: 300,
      price: 150,
      count: 0,
      comission: 15,
    },
    {
      title: 'Сейтан Сейсей',
      image: 'seysei/saysei_seitan.webp',
      weigth: 250,
      price: 180,
      count: 0,
      comission: 15,
      description: {
        text: 'Глютен (клейковина) пшеничный, 70% белка, соевый изолят, 90% белка, соль, сода, глутамат натрия, сахар, лук, чеснок, ксантанова камедь, каррагинан',
        protein: 26,
        fat: 1,
        carbs: 5.8,
        kcal: 136,
      },
    },
    {
      title: 'Сейтан Сейсей копч',
      image: 'seysei/saysei_seitan_smoked.webp',
      weigth: 200,
      price: 180,
      count: 0,
      comission: 15,
      description: {
        text: 'Свежий и копченый сейтан - одного состава, но второй при горячем копчении теряет часть воды, поэтому концентрация белка в нем немного больше. Глютен (клейковина) пшеничный, 70% белка, соевый изолят, 90% белка, соль, сода, глутамат натрия, сахар, лук, чеснок, ксантанова камедь, каррагинан.',
        protein: 26,
        fat: 1,
        carbs: 5.8,
        kcal: 136,
      },
    },
    {
      title: 'Тофу-чечил "Кыр сосичка"',
      image: 'mallakto/kyr-sosichka.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/tofu-chechil-kyr-sosichka',
      weigth: 150,
      price: 190,
      count: 0,
      comission: 15,
    },
    {
      title: 'Вегшпроты',
      image: 'mallakto/vegshproty.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/vegshproty',
      weigth: 200,
      price: 190,
      count: 0,
      comission: 15,
    },

    {
      title: 'Тофу-бычки',
      image: 'mallakto/bychki.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/tofu-bychki',
      weigth: 200,
      price: 190,
      count: 0,
      comission: 15,
    },
    {
      title: 'Некрабовые палочки',
      image: 'mallakto/nekrabovye-palochk.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/nekrabovye-palochki',
      weigth: 150,
      price: 190,
      count: 0,
      comission: 15,
    },
    {
      title: 'Глазированный сырок с кокосовой стружкой',
      image: 'mallakto/syrok-s-kokosovoi-struzhkoi.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/glazirovannyi-syrok-s-kokosovoi-struzhkoi',
      weigth: 90,
      price: 120,
      count: 0,
      comission: 15,
    },
    {
      title: 'Глазированный сырок шоколадный с вишней',
      image: 'mallakto/syrok-vishnya.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/glazirovannyi-syrok-shokoladnyi-s-vishnei',
      weigth: 90,
      price: 120,
      count: 0,
      comission: 15,
    },
    {
      title: 'Глазированный сырок с арахисовой пастой',
      image: 'mallakto/syrok-s-arakhisovoi-pastoi.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/glazirovannyi-syrok-s-arakhisovoi-pastoi',
      weigth: 90,
      price: 120,
      count: 0,
      comission: 15,
    },
    {
      title: 'Наггетсы из тофу',
      image: 'mallakto/naggetsy.webp',
      link: 'https://mallakto.ru/products/produkty-iz-tofu/naggetsy-iz-tofu',
      weigth: 380,
      price: 200,
      count: 0,
      comission: 15,
    },
    {
      title: 'Темпе соевый классический',
      image: 'mallakto/tempe-klassicheskij.png',
      link: 'https://fungfung.ru/',
      weigth: 250,
      price: 300,
      count: 0,
      comission: 15,
    },
    {
      title: 'Темпе соевый копчёный',
      image: 'mallakto/tempe-kopchyonyj.png',
      link: 'https://fungfung.ru/',
      weigth: 250,
      price: 375,
      count: 0,
      comission: 15,
    },
    {
      title: 'Темпе нутовый классический',
      image: 'mallakto/tempe-nutovyj.png',
      link: 'https://fungfung.ru/',
      weigth: 250,
      price: 350,
      count: 0,
      comission: 15,
    },
    {
      title: 'Темпе нутовый копчёный',
      image: 'mallakto/tempe-nutovyj-kopchenyj.png',
      link: 'https://fungfung.ru/',
      weigth: 250,
      price: 400,
      count: 0,
      comission: 15,
    },
    {
      title: 'Темпе гречневый классический',
      image: 'mallakto/tempe-grechnevyj.png',
      link: 'https://fungfung.ru/',
      weigth: 250,
      price: 325,
      count: 0,
      comission: 15,
    },
  ])

  const hoodGoods = ref<Good[]>([
    {
      title: 'Кантучини вес (кратно 100 гр)',
      image: 'hood/cookie.webp',
      weigth: 100,
      price: 80,
      count: 0,
      description: {
        text: 'Состав: Мука, банан, миндаль, масло подсолнечное, инвертный сироп, сахар, разрыхлитель. Срок хранения: 90 суток при t +18 + 25',
        protein: 9,
        fat: 16,
        carbs: 54,
        kcal: 410.4,
      },
    },
    {
      title: 'Бекон классический',
      image: 'hood/bacon.webp',
      weigth: 150,
      price: 170,
      count: 0,
      description: {
        text: 'Состав: Глютен, вода, масло кокосовое, специи (чеснок суш., паприка, паприка копч., соль), мисо паста, ароматизатор бекон, жидкий дым. Срок хранения: 90 суток при t -8 -18',
        protein: 34.6,
        fat: 9.6,
        carbs: 5.1,
        kcal: 245,
      },
    },
    {
      title: 'Бекон маринованный',
      image: 'hood/bacon.webp',
      weigth: 150,
      price: 170,
      count: 0,
      description: {
        text: 'Состав: Глютен, вода, масло кокосовое, специи, мисо паста, ароматизатор бекон, жидкий дым, маринад (соевый соус, веган мед, горчица, специи) Срок хранения: 90 суток при t -8 -18',
        protein: 33,
        fat: 9.6,
        carbs: 7.1,
        kcal: 267,
      },
    },
    {
      title: 'Блины с джемом и арахисовой пастой',
      image: 'hood/pancake_peanut.webp',
      weigth: 330,
      price: 310,
      count: 0,
      description: {
        text: 'Состав: Мука пшеничная, масло раститительное, сахар, соль, арахисовая паста, ягодный джем, банан, соевый изолят. Срок хранения: 120 суток при t -18 -25',
        protein: 0, // TODO: missed
        fat: 0, // TODO: missed
        carbs: 0, // TODO: missed
        kcal: 0, // TODO: missed
      },
    },
    {
      title: 'Блины с тофу и шпинатом',
      image: 'hood/pancake_tofu.webp',
      weigth: 330,
      price: 310,
      count: 0,
      description: {
        text: 'Состав: Мука пшеничная, шпинат масло растительное, масло кокосовое, сахар, соль, тофу, шпинат с/м., лук, чеснок, специи. Срок хранения: 120 суток при t -18 -25',
        protein: 4.8,
        fat: 5.6,
        carbs: 13.8,
        kcal: 124.1,
      },
    },
    {
      title: 'Блины с фаршем',
      image: 'hood/pancake.webp',
      weigth: 330,
      price: 220,
      count: 0,
      description: {
        text: 'Состав: Мука пшеничная, масло растительное, масло кокосовое, сахар, соль, фарш соевый, соевый соус, кинза, укроп, специи. Срок хранения: 120 суток при t -18 -25',
        protein: 17.2,
        fat: 3.6,
        carbs: 25.8,
        kcal: 204.1,
      },
    },
    {
      title: 'Лазанья',
      image: 'hood/lasagna.webp',
      weigth: 500,
      price: 400,
      count: 0,
      description: {
        text: 'Состав: Соус болоньезе (лук,морковь, томатн.паста, сельдерей, томаты с/с, текстурат соевый, гороховый, рисовый; растительные масла (подсолнечное, рапсовое, кокосовое); изолят соевого белка, специи); соус бешамель (молоко соевое, спред, мука,с пеции); мак.изд. лазанья; сыр растит. чеддер) Срок хранения: 90 суток при t -8 -18',
        protein: 7.5,
        fat: 25.4,
        carbs: 20.7,
        kcal: 341.3,
      },
    },
    {
      title: 'Фалафель',
      image: 'hood/falafel.webp',
      weigth: 500,
      price: 400,
      count: 0,
      description: {
        text: 'Состав: Нут, лук, чеснок, зелень, кунжут, льняная мука, специи, панировочные сухари. Срок хранения: 90 суток при t -8 -18',
        protein: 13.6,
        fat: 7,
        carbs: 51.6,
        kcal: 324,
      },
    },
    {
      title: 'Фарш болоньезе',
      image: 'hood/mincemeat_bolognese_500.webp',
      weigth: 500,
      price: 330,
      count: 0,
      description: {
        text: 'Состав: Лук, морковь, томатн.паста, сельдерей, томаты с/с, текстурат соевый, гороховый, рисовый; растительные масла (подсолнечное, рапсовое, кокосовое); изолят соевого белка, специи (черный перец, паприка копченая), краситель бурый рис. Срок хранения: 90 суток при t -8 -18',
        protein: 33.4,
        fat: 3.7,
        carbs: 24.4,
        kcal: 0, // TODO: missed
      },
    },
    {
      title: 'Фарш для хинкали/пельменей',
      image: 'hood/mincemeat_hinkal_500.webp',
      weigth: 500,
      price: 330,
      count: 0,
      description: {
        text: 'Состав: Фарш соевый, лук, соевый соус, кинза, укроп, подсолнечное масло, соль, специи Срок хранения: 90 суток при t -8 -18',
        protein: 0, // TODO: missed
        fat: 0, // TODO: missed
        carbs: 0, // TODO: missed
        kcal: 0, // TODO: missed
      },
    },
    {
      title: 'Хинкали грибные с картофелем (6 шт)',
      image: 'hood/hinkal.webp',
      weigth: 330,
      price: 330,
      count: 0,
      description: {
        text: 'Состав: Мука пшеничная, грибы (шампиньоны), лук, масло подсолнечное, картофель, специи (хмели-сумели, черный перец, соль, сушеный чеснок). Срок хранения: 90 суток при t -8 -18',
        protein: 4.1,
        fat: 5.2,
        carbs: 19.4,
        kcal: 140,
      },
    },
    {
      title: 'Хинкали (6 шт)',
      image: 'hood/hinkal.webp',
      weigth: 330,
      price: 330,
      count: 0,
      description: {
        text: 'Состав: Мука пшеничная, фарш соевый, лук, соевый соус, кинза, укроп, специи. Срок хранения: 90 суток при t -8 -18',
        protein: 20.6,
        fat: 10.1,
        carbs: 13,
        kcal: 206.1,
      },
    },
    {
      title: 'сыр "Вега-Классика" VEGALIZE на вес кратно 100 гр',
      image: 'hood/vegalize.webp',
      weigth: 100,
      price: 70,
      count: 0,
      description: {
        text: 'вода питьевая, масло кокосовое, стабилизатор Е1420, крахмал картофельный, стабилизатор Е1450, соль пищевая, ароматизаторы пищевые, краситель бета-каротин, консервант сорбат калия',
        protein: 0.1,
        fat: 25,
        carbs: 20,
        kcal: 305,
      },
    },
    {
      title: 'Икра красная Vegan',
      image: 'hood/caviar_red.webp',
      weigth: 100,
      price: 115,
      count: 0,
      description: {
        text: 'Вода питьевая; экстракт бурых водорослей (альгинат натрия); загустители – Е466, гуаровая камедь; соль; ароматизатор (усилители вкусаи аромата – Е621, Е627, Е631; гидролизованный овощной бульон (из подсолнечника)); масло растительное; регулятор кислотности – лактаткальция; красители – экстракт паприки, Е124; антиокислитель – Е321.',
        protein: 0,
        fat: 1,
        carbs: 2,
        kcal: 15.5,
      },
    },
    {
      title: 'Икра черная Vegan',
      image: 'hood/caviar_black.webp',
      weigth: 100,
      price: 115,
      count: 0,
      description: {
        text: 'Вода питьевая; загуститель - Е1422; соль; масло подсолнечное рафинированное дезодорированное «Первый сорт»; экстракт бурых водорослей (альгинат натрия); комплексная пищевая добавка (мальтодекстрин; усилители вкуса и аромата - Е621, Е627, Е631; ароматизаторы; гидролизованный овощной бульон (из подсолнечника); антислеживающий агент - Е551; краситель - экстракт паприки, Е153; антиокислитель - Е306; эмульгатор - Е433); загуститель - Е466; регулятор кислотности - лимонная кислота; антиокислитель - Е321.',
        protein: 0,
        fat: 3,
        carbs: 3.5,
        kcal: 40,
      },
    },
  ])

  const allGoods = computed(() => mallaktoGoods.value.concat(hoodGoods.value))

  const basket = computed(() => {
    const [mallakto, hood] = [
      mallaktoGoods.value.filter((el) => el.count),
      hoodGoods.value.filter((el) => el.count),
    ]
    return {
      hood,
      mallakto,
      all: [...mallakto, ...hood],
    }
  })

  const totalSum = computed(() => {
    return basket.value.all.reduce((acc, el) => acc + el.price * el.count, 0)
  })

  const totalItemsCount = computed(() => {
    return basket.value.all.reduce((acc, el) => acc + el.count, 0)
  })

  const totalWeigth = computed(() => {
    return basket.value.all.reduce((acc, el) => acc + el.weigth * el.count, 0) / 1000
  })

  const totalComission = computed(() => {
    return basket.value.all.reduce((acc, el) => acc + (el?.comission ?? 0) * el.count, 0)
  })

  return {
    mallaktoGoods,
    hoodGoods,
    allGoods,

    totalItemsCount,
    basket,
    totalSum,
    totalWeigth,
    totalComission,
  }
})
