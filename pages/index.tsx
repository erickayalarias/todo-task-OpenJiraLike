import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { Navbar } from '../components/ui/Navbar'
import { Sidebar } from '../components/ui/Sidebar'
import { EntryList } from '../context/ui'

const HomePage: NextPage = () => {
  return (
    <Layout title={"Home - OpenJira"}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} >
          <Card sx={{
            height: "calc(100vh - 100px)",
          }}>
            <CardHeader title="pendientes" />
           
              {/* {"Agregar una nueva entrada"} */}
             <EntryList/>
              
         

          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
        <Card sx={{
            height: "calc(100vh - 100px)",
          }}>
            <CardHeader title="En Progreso" />
            <EntryList/>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} >
        <Card sx={{
            height: "calc(100vh - 100px)",
          }}>
            <CardHeader title="Completadas" />
             <EntryList/>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
