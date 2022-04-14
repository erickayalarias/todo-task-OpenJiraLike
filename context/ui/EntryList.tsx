import { List, Paper } from '@mui/material'
import React from 'react'
import { EntryCard } from './'

export const EntryList = () => {
    return (
      //Todo: desde aqui se hace el drop
        
      <div >
            <Paper sx={{
                height: 'calc(100vh - 250px)',
                overflow: "auto",
                backgroundColor: "transparent",
                padding:"3px 5px"
            }}>
                {/* {"Todo : cambiara dependiendo de si yo hago drag o no"} */}
                <List sx={{ opacity:1}}>
                 <EntryCard/>    
                </List>
          </Paper>
    </div>
  )
}
