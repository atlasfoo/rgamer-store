import React, { useEffect } from 'react'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'

const search = () => {

  useEffect(() => {
    document.getElementById("search-game").focus();
  }, [])

  return (
    <BasicLayout className="search">
      <h3>Busqueda</h3>
    </BasicLayout>
  )
}

export default search
