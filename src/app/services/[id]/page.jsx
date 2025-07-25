import React from 'react'

export default async function page({params}) {
    const p = await params;
  return (
    <div>
        {JSON.stringify(p)}
    </div>
  )
}
