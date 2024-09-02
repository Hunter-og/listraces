import React from 'react'

export default function Home2() {
    const [counter, setcounter] = useState(0)

    const data = [
        {
            id: 1,
            title: 'basic title 1',
            description:'description basic 1',
            value: 4,
            active: 'close',

        },
        {
            id: 2,
            title: 'intermediate title 1',
            description:'description basic 1',
            value: 3,
            active: 'close',

        },
        {
            id: 3,
            title: 'advance title 1',
            description:'description intermediate 1',
            value: 1,
            active: 'close',

        },
    ]
  return (
    <div>
        <div className=' flex justify-center gap-8'>
            {
                data.map ((eachdata, index)=>{
                    return(
                        <div className=' border border-black p-10' onClick={()=>setselect(eachdata.id)}>
                            <p>{eachdata.id}</p>

                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}
