import { useEffect, useState } from 'react'
import './App.css'
import { Card } from './components/cards/cards'
import { Privacy } from './components/privacy/privacy'
import { Rrss } from './components/rrss/rrss'
import { Section } from './components/section/section'
//URL API VERCEL'https://asyncapi-zeta.vercel.app/datosapi'
//cambiosa
function App() {

  const [sections, setSections] = useState([]);
  const [itemCards, setItemCards] = useState([]);
  const [itemBox, setItemBox] = useState([]);
  const [footer, setFooter] = useState([]);
  const [rrss, setRrss] = useState([]);

  const { VITE_API } = import.meta.env

  useEffect(() => {
    const fetchData = async () => {
      try {

        let controller = new AbortController()
        let options = {
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            },
            signal : controller.signal
        }

        const response = await fetch(VITE_API , options);
        const jsonData = await response.json();
        setSections(jsonData[0].data.sectionsa);
        setItemCards(jsonData[0].data.itemCardsa);
        setItemBox(jsonData[0].data.itemBoxa);
        setFooter(jsonData[0].data.footera);
        setRrss(jsonData[0].data.rrssa);
      } catch (error) {
        console.error('Error fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {
        sections.map( each =>
          <Section
            key={ each.id } { ...each }
          />
        )
      }
      <Card
        informacion={itemCards}
        tipo = 'itemCards'
      />
      <Card
        informacion={itemBox}
        tipo = 'itemBox'
      />
      <Privacy
        informacion={footer}
      />
      <Rrss
        informacion={rrss}
      />
    </>
  )
}

export default App
