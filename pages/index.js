import { useEffect, useRef, useState } from 'react'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [name, setName] = useState('')
  const [japanese, setJapanese] = useState('')

  useEffect(()=>{
    const name = ref.current.value
    let japanese = ''
    for (let i = 0; i < name.length; i++) {
      const letter = name[i].toLowerCase()
      japanese += alphabeth[letter] || letter
    }
    setJapanese(japanese)
  }, [name])

  const ref = useRef(null)
  return (
    <main
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      
      <h1 className="text-4xl font-bold text-center py-10">
        Convert your name to japanese by <span className='font-bold'>Zumotokachirikato Shimorinkushimo</span> powered by Ikaro Studio
      </h1>

      <div className="flex flex-col items-center justify-center">
        <input ref={ref} placeholder="Type your name" onChange={(e)=>setName(e.target.value)} value={name} className="border-2 border-gray-300 rounded-md p-2 text-black" />
        
        <div className="text-2xl font-bold capitalize py-4">{japanese}</div>
      </div>
      

      
    </main>
  )
}

const alphabeth = {
  a: 'ka',
  b:  'zu',
  c: 'mi',
  d: 'te',
  e: 'ku',
  f: 'lu',
  g: 'ji',
  h: 'ri',
  i: 'ki',
  j: 'zu',
  k: "me",
  l: 'ta',
  m: 'rin',
  n: 'to',
  o: 'mo',
  p: 'no',
  q: 'ke',
  r: 'shi',
  s: 'ari',
  t: 'chi',
  u: 'do',
  v: 'ru',
  w: 'mei',
  x: 'na',
  y: 'fu',
  z: 'zi'
}
