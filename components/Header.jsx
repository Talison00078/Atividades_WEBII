import React from 'react'
import classes from "./Header.module.css"

const Header = () => {
  return (
    <div>
        <h1 className={classes.h1}>Auxílio para estudantes</h1>
        <p className={classes.p}>Essa aplicação tem como objetivo auxiliar estudantes a organizar suas atividades acadêmicas.</p>
        
    </div>
  )
}

export default Header