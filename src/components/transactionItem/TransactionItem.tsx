import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { styles } from './TransactionItemStyles'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

interface IProps {
    eachTransaction: {
        userName: string | undefined,
        amount: number,
        type: string,
        purpose: string,
        description: string,
        time: string,
    }
}

function TransactionItem(props: IProps) {

    const transactionObj = props.eachTransaction
    const incomeType = transactionObj?.type === 'income'
    const expenseType = transactionObj?.type === 'expense'

    return (
        <Box component='li' sx={styles.item_container}>

            <Box sx={styles.icon_container}>
                {incomeType && <Typography><ArrowDownward sx={styles.icons} /></Typography>}
                {expenseType && <Typography><ArrowUpward sx={styles.icons} /></Typography>}
            </Box>

            {incomeType ? <Typography>Credit</Typography> : <Typography>Debit</Typography>}

            <Typography>{transactionObj.userName}</Typography>

            <Stack flexDirection={'column'}>
                {incomeType && <Typography sx={{ fontSize: '18px', fontWeight: 600 }}>-</Typography>}
                {expenseType &&
                    <>
                        <Typography variant='h6'>{transactionObj.purpose}</Typography>
                        <Typography color='#808080'>{transactionObj.description}</Typography>
                    </>
                }
            </Stack>

            <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                {incomeType && <Typography variant='h6' color='green'>&#8377; {transactionObj.amount}</Typography>}
                {expenseType && <Typography variant='h6' color='red'>-&#8377; {transactionObj?.amount}</Typography>}
                <Typography color='#808080'>{transactionObj.time}</Typography>
            </Box>
        </Box>
    )
}

export default TransactionItem