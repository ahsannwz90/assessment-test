import { Button, Grid, Typography, styled } from "@mui/material";

const PrimaryButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    color:'#fff',
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  });




export const Title = ({ text, Discription }:any) => {
    return (
        <Grid textAlign={'center'} mt={'150px'}>
            <Typography
            variant="h2"
            fontSize={'32px'}
            fontWeight={'bold'}
            color="#16161D"
            >
            {text}
          </Typography>
          <Typography
            fontSize={'16px'}
            fontWeight={'regular'}
            color="#16161D"
            mb={'20px'}
            >
            {Discription}
          </Typography>
          <PrimaryButton href="/reports">Go to Reports</PrimaryButton>
          </Grid>
    )
}
