import { Box,Tabs, } from '@mui/material'
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { BENCHES } from '../../constants/product';
import CardBox from './CardBox';

const Category = () => {
    const [value, setValue] = useState('benches');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
                variant="scrollable"
                sx={{width:"60vw"}}
            >
                <Tab value="benches" label="Benches" />
                <Tab value="fountain" label="Fountain" />
                <Tab value="birdbaths" label="Birdbaths" />
                <Tab value="carvings" label="Carvings" />
                <Tab value="lamps" label="Lamps" />
                <Tab value="marble-handicrafts" label="Marble Handicrafts" />
                <Tab value="pillars" label="Pillars" />
                <Tab value="planters" label="Planters" />
                <Tab value="statues" label="Statues" />
                <Tab value="temples" label="Temples" />
                <Tab value="sculptures" label="Sculptures" />
            </Tabs>
            <CardBox data={BENCHES}/>
            <CardBox data={BENCHES}/>
        </Box>
    )
}

export default Category