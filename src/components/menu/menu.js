import React from 'react' 

import '../../styles/menu/menu.css'

function Menu({data}) {
    return (
        <div className='menu'>
            <ul>
              {data.map(({link, title}, i) => (
                  <li key={i}><a href={link}>{title}</a></li>
              ))}
            </ul>
        </div>
    )
}

const data = [
    {link: '/', title: 'Home'},
    {link: '/', title: 'About'},
    {link: '/', title: 'Gallery'},
]

export default function MenuComponent() {
    return <Menu data={data} />
}