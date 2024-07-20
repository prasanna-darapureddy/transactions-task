import { Box, Stack, Typography, } from '@mui/material'
import { useLocation, useNavigate } from "react-router-dom";
import React from 'react'
import TransactionItem from './transactionItem/TransactionItem'

type locationStateProps = {
  transactionsList: {
    userName: string | undefined;
    amount: number;
    type: string;
    purpose: string;
    description: string;
    time: string;
  }[]
}

function AllTransactions() {
  const location = useLocation();
  const state: locationStateProps = location.state
  const { transactionsList } = state
  const navigate = useNavigate()

  return (
    <Box component='ul' sx={{ padding: '20px' }}>
      <Box sx={styles.header_container}>
        <Typography variant='h4'>All Transactions</Typography>
        {transactionsList?.length > 0 && <Box component='button' sx={styles.back_button} onClick={() => navigate("/")}>Back</Box>}
      </Box>
      {transactionsList?.length > 0 ?
        <>
          {transactionsList.map(eachTransaction => (
            <TransactionItem eachTransaction={eachTransaction} key={eachTransaction.amount} />
          ))}
        </> :

        <Stack flexDirection={'column'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'60vh'} gap={4}>
          <Typography variant='h3' color={'#7f3dff'}>No Transactions Yet</Typography>
          <Box component='button' sx={styles.back_button} onClick={() => navigate("/")}>Back</Box>
        </Stack>
      }
    </Box>
  )
}

export default AllTransactions

const styles = {
  header_container: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px',
  },
  back_button: {
    cursor: 'pointer', backgroundColor: '#EEE5FF', borderRadius: 40, padding: '10px', border: 'none', outline: 'none', color: '#43286b', fontWeight: 500, width: '90px'
  }

}