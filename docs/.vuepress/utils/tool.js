// 获取min到max之间的随机数,不包含0
export const getRandomNum = (min, max) => {
  let num = 0
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min // 生成介于min到max之间的整数
  } while (num === 0) // 如果生成的是0，就重复生成
  return num
}
