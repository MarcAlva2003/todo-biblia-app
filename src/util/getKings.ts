import data from '../data/kings.json'

export const getKings = () => {
  console.log('data',data);
  return data
  // fetch('../data/kings.json')
  // .then(response => response.json())
  // .then(data => console.log(data))
  // .catch(error => console.error('Error fetching data:', error));
}

export const getKingByKey = (king_key: string) => {
  const king = data.israel.filter(item => item.key === king_key)
  // const king = data.israel.map((item) => item.key === king_key)
  console.log('king', king)
  return king.length > 0 ? king[0] : undefined
}