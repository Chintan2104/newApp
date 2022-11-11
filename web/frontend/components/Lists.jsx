import React from 'react'
// import { Provider, ResourcePicker } from '@shopify/app-bridge-react';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json();
  return {
    props: {
      asd: data
    },
  }
}
const Lists = ({ asd }) => {

  return (
    <>
      {
        data.map((val) => {
          return (
            <div>{val}</div>
          )
        })
      }
    </>
  )
}

export default Lists


