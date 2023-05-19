import {v4 as uuidv4} from 'uuid';
import { Icon } from '@iconify/react';


const myData = [   
    {
      id: uuidv4(),
      title: "Bilder",
      tasks: [

        {
        id: uuidv4(),
        img:<Icon icon="fa6-solid:fish" width="25" />,
        text:"Fisch",
        gen:"m"
        },

        { 
        id: uuidv4(),
        img:<Icon icon="fa6-solid:cat" width="25"  />,
        text:"Katze",
        gen:"f"
        },

        {
        id: uuidv4(),
        img:<Icon icon="fa6-solid:dog" width="25" />,
        text:"Hund",
        gen:"m"
        },
        {
        id: uuidv4(),
        img:<Icon icon="fa6-solid:dove"  width="25"  />,
        text:"Taube",
        gen:"f"
        },
        {
        id: uuidv4(),
        img:<Icon icon="fa6-solid:horse"  width="25" />,
        text:"Pferd",
        gen:"n"
        },
        {
        id: uuidv4(),
        img:<Icon icon="fa6-solid:frog" width="25" />,
        text:"Frosch",
        gen:"m"
        },
        {
        id: uuidv4(),
        img:<Icon icon="fa6-solid:spider"  width="25" />,
        text:"Spinne",
        gen:"f"
        }
      ]

    },
      {
      id: uuidv4(),
      title: "der",
      tasks:[],
      gen:"m"
      },
      {
      id: uuidv4(),
      title: "die",
      tasks:[],
      gen:"f"
      },
      {
      id: uuidv4(),
      title: "das",
      tasks:[],
      gen:"n"
      }
    ]
  export default myData 
    