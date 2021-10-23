import React from "react";
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';

// Implemented demo from https://mui.com/system/basics/

function App(props) {
    return ( 
		// Box element is similar to div, creates a "Box" that contains data i.e Img, Text
        <Box
        sx={{ // SX represents system properties as a 'prop' which is just a data container that gets passed to the HTML?
			  // It's like including 'style=' in your HTML element directly but more complicated
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'background.paper',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
            width: 1/2, // Material-UI uses fractions for relative sizes, not 'em' like CSS
        }}
        >
        <Box
            component="img" // Components take priority over React and force an HTML element, in this case <img>
            sx={{
            height: '100%', // Again, MUI doesn't use 'em' for relative sizes
            width: '100%',
            maxHeight: { xs: 280, md: 167 }, 
            maxWidth: { xs: 500, md: 250 },
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            m: 3,
            minWidth: { md: 350 },
            }}
        >
            <Box component="span" sx={{ color: 'primary.main', fontSize: 16, mt: 1 }}> 
            123 Main St, Phoenix AZ													   
            </Box>

            <Box component="span" sx={{ color: 'primary.main', fontSize: '100%' }}>
            $280,000 — $310,000
            </Box>

			// 'primary.main' addresses the relevant style set in the "priamry" section of the theme
			// as an example, here is my theme from main.js
			
			//const theme1 = createTheme({
			//palette:{
			//primary:{
            //main: "#303030"}}});
			
			// This would set the text colour of the above text elements to a lime-ish green
			
            <Box sx={{
                mt: 1.5,
                p: 0.5,
                backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                borderRadius: '5px',
                color: 'primary.main',
                fontWeight: 'medium',
                display: 'flex',
                fontSize: 12,
                alignItems: 'center',
                '& svg': {
                fontSize: 21,
                mr: 0.5,
                },
            }}>
            CONFIDENCE SCORE 85%
            </Box>
        </Box>
    </Box>
    );
};

export default App;