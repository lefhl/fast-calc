export const SUCCESS_COPY_MESSAGE = {
  title: 'Успех',
  message: 'Данные скопированы!',
  duration: 5000,
}
export const FAIL_COPY_MESSAGE = {
  title: 'Не получилось, не фортануло',
  message: 'Ошибка при копировании! Попробуйте скопировать вручную',
  duration: 3000,
}

export function* uniqSimpleIdGenerator(start = 0) {
  let current = start
  while (true) {
    yield current
    current += 1
  }
}
