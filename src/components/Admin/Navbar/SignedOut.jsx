import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function SignedOut() {
   return (
      <div>
         <Button LinkComponent={Link} to="/auth" variant="contained" color="primary">Signin</Button>

      </div>
   )
}

export default SignedOut
