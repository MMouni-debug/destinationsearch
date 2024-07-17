
import DestinationSearch from './components/DestinationSearch'

import './App.css'

const destinationsList = [
  {
    id: 1,
    name: 'Melaka Mosque',
    imgUrl: 'https://image.shutterstock.com/image-photo/melaka-malacca-strait-mosque-malaysia-260nw-777553009.jpg',
  },
  {
    id: 2,
    name: 'Shrubland',
    imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.e6YmI3DxjPUs9auOB3KdZwHaE9&pid=Api&P=0&h=180',
  },
  {
    id: 3,
    name: 'New York',
    imgUrl: 'https://tse3.mm.bing.net/th?id=OIP.KNgR2GDvAhv-uMtRf4hKKwHaE8&pid=Api&P=0&h=180',
  },
  {
    id: 4,
    name: 'Escarpment',
    imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.3RkfsAVlhtJIr6jmVvPnhgHaEt&pid=Api&P=0&h=180',
  },
  {
    id: 5,
    name: 'Westminster Abbey',
    imgUrl:
      'https://thumbs.dreamstime.com/b/westminster-abbey-architectural-detail-london-uk-49018419.jpg',
  },
  {
    id: 6,
    name: 'South Downs National Park',
    imgUrl:
      'https://wpcluster.dctdigital.com/peoplesfriend/wp-content/uploads/sites/48/2021/01/shutterstock_1427772974-scaled.jpg',
  },
  {
    id: 7,
    name: 'National Historic Site',
    imgUrl:
      'https://tse1.mm.bing.net/th?id=OIP.LkGhHzL_nFsvfI5yfmz6UgHaE8&pid=Api&P=0&h=180',
  },
  {
    id: 8,
    name: 'Tower Bridge',
    imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.NAhufqrOPu2EBBmZPj0A7AHaE7&pid=Api&P=0&h=180',
  },
  {
    id: 9,
    name: 'Arc Here',
    imgUrl: 'https://tse1.mm.bing.net/th?id=OIP.ntW7r_Uvw4Pdgr6Gt7H_oQHaFH&pid=Api&P=0&h=180',
  },
  {
    id: 10,
    name: 'Steeple',
    imgUrl: 'https://tse4.mm.bing.net/th?id=OIP.cDY2yeN7pO9gu_64YAdhsQHaE9&pid=Api&P=0&h=180',
  },
  {
    id: 11,
    name: 'Glaciokarst',
    imgUrl: 'https://tse2.mm.bing.net/th?id=OIP.w1u253B4Dnlt1IU3b4HcYQHaEW&pid=Api&P=0&h=180',
  },
  {
    id: 12,
    name: 'Parco Nazionale delle Cinque Terre',
    imgUrl:
      'https://tse1.mm.bing.net/th?id=OIP.ngoU5WDRKVF44n0Pm_aNewHaEK&pid=Api&P=0&h=180',
  },
]


const App = () => <DestinationSearch destinationsList={destinationsList} />

export default App
