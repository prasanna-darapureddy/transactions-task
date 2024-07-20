import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Box, Typography, Modal, MenuItem, InputLabel, FormControl, Select, Stack, } from '@mui/material'
import avatar from '../../assets/Avatar=05, Border=No.svg'
import { AccountBalanceWallet, ArrowDownward, ArrowUpward, Notifications } from '@mui/icons-material'
import TransactionItem from '../transactionItem/TransactionItem'
import { styles } from './RecentTransactionsStyles';

const usersList = [
    {
        id: 1,
        userName: 'user1',
    },
    {
        id: 2,
        userName: 'user2',
    },
    {
        id: 3,
        userName: 'user3',
    }
]

interface IState {
    usersList: {
        id: number,
        userName: string,
    }[],
    balance: number,
    totalIncome: number,
    totalExpenses: number,
    selectedUser: string | undefined,
    amount: string | number,
    purpose: string,
    description: string,
    noDebit: boolean,
    transactionsList: {
        userName: string | undefined,
        amount: number,
        type: string,
        purpose: string,
        description: string,
        time: string,
    }[],
}

function RecentTransactions() {
    const [selectedUser, setSelectedUser] = useState<IState['selectedUser']>('')
    const [balance, setBalance] = useState<IState['balance']>(0)
    const [totalIncome, setTotalIncome] = useState<IState['totalIncome']>(0)
    const [totalExpenses, setTotalExpenses] = useState<IState['totalExpenses']>(0)
    const [transactionsList, setTransactionsList] = useState<IState['transactionsList']>([])
    const [incomeAmount, setIncomeAmount] = useState<IState['amount']>('')
    const [expensesAmount, setExpensesAmount] = useState<IState['amount']>('')
    const [purpose, setPurpose] = useState<IState['purpose']>('')
    const [description, setDescription] = useState<IState['description']>('')
    const [openIncome, setOpenIncome] = useState(false);
    const [openExpenses, setOpenExpenses] = useState(false);


    const time = new Date()
    const incomeNumAmount = Number(incomeAmount)
    const expensesNumAmount = Number(expensesAmount)
    const recentTransactionsList = transactionsList.slice(0, 5)
    const navigate = useNavigate();




    const onClickIncomeContainer = () => {
        if (selectedUser === '') {
            alert('Please select username')
            return
        } setOpenIncome(true)
    }

    const onClickExpensesContainer = () => {
        if (selectedUser === '') {
            alert('Please select username')
            return
        } setOpenExpenses(true)
    }

    const onClickCreditButton = () => {
        if (selectedUser !== '') {
            const currentUser = usersList.find(eachUser => eachUser.userName === selectedUser)
            if (incomeAmount === '') {
                alert('Please enter amount')
                return
            } else if (incomeNumAmount > 100 && incomeNumAmount > 0) {
                const newCreditTransaction = { userName: currentUser?.userName, amount: incomeNumAmount, type: 'income', purpose, description, time: time.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }) }

                setTransactionsList([newCreditTransaction, ...transactionsList])
                setBalance(balance + incomeNumAmount)
                setTotalIncome(totalIncome + incomeNumAmount)
                setOpenIncome(false)
            }
        }
        setIncomeAmount('')
        setExpensesAmount('')
        setPurpose('')
        setDescription('')
    }

    const onClickDebitButton = () => {
        if (selectedUser !== '') {
            console.log(expensesAmount)
            const currentUser = usersList.find(eachUser => eachUser.userName === selectedUser)
            if (expensesAmount === '') {
                alert('Please enter amount')
                return
            } else if (purpose === '') {
                alert('Please enter purpose of the transaction')
                return
            } else if (balance <= 100 || expensesNumAmount <= 0 || expensesNumAmount <= 100) {
                alert('Please enter amount atleast above 100')
                return
            } else if (expensesNumAmount > balance) {
                alert('Insufficient Balance')
                return
            } else if ((balance >= expensesNumAmount && expensesNumAmount > 0) || balance === expensesNumAmount) {
                const newDebitTransaction = { userName: currentUser?.userName, amount: expensesNumAmount, type: 'expense', purpose, description, time: time.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }) }
                setTransactionsList([newDebitTransaction, ...transactionsList])
                setBalance(balance - expensesNumAmount)
                setTotalExpenses(totalExpenses + expensesNumAmount)
                setOpenExpenses(false)
            }
        }
        setIncomeAmount('')
        setExpensesAmount('')
        setPurpose('')
        setDescription('')
    }

    const onCloseIncomeModal = () => {
        setOpenIncome(false)
        setIncomeAmount('')
    }

    const onCloseExpensesModal = () => {
        setOpenExpenses(false)
        setExpensesAmount('')
        setPurpose('')
        setDescription('')
    }


    return (
        <Box sx={styles.bg_container} >
            <Box sx={styles.content_container}>
                <Box sx={styles.profile_container}>
                    <Box component='img' src={avatar} alt='avatar' sx={styles.profile_img} />

                    <Box>
                        <FormControl >
                            <InputLabel id="demo-simple-select-label">Users</InputLabel>
                            <Select
                                sx={styles.select_user_input}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedUser}
                                label="Users"
                                onChange={(e) => setSelectedUser(e.target.value)}
                            >
                                {usersList.map(eachUser =>
                                    <MenuItem key={eachUser.id} value={eachUser.userName}>
                                        {eachUser.userName}
                                    </MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </Box>

                    <Notifications sx={styles.profile_bell_icon} />
                </Box>
                {selectedUser === '' ?
                    <Box sx={styles.zero_balance_container}>
                        <Typography sx={styles.balance_text}>Account Balance</Typography>
                        <Typography variant='h2' sx={{ fontWeight: 600 }}>&#8377; {balance}</Typography>
                    </Box> :

                    <Box sx={styles.balance_service_container}>

                        <Box sx={styles.balance_container}>
                            <Typography sx={styles.balance_text}>Account Balance</Typography>
                            <Typography variant='h2' sx={{ fontWeight: 600 }}>&#8377; {balance}</Typography>
                        </Box>

                        <Box sx={styles.services_container}>
                            <Box sx={styles.income_container} onClick={onClickIncomeContainer}>
                                <Box sx={styles.income_icons_container}>
                                    <ArrowDownward />
                                    <AccountBalanceWallet />
                                </Box>
                                <Box>
                                    <Typography variant='h5'>Income</Typography>
                                    <Typography variant='h4'>&#8377; {totalIncome}</Typography>
                                </Box>
                            </Box>

                            <Modal
                                open={openIncome}
                                onClose={onCloseIncomeModal}
                            >
                                <Box sx={styles.modal_content}>
                                    <Typography variant="h6" component="h2">
                                        Credit
                                    </Typography>
                                    <Box component='div' sx={styles.inputs_container}>
                                        <Box component='input' type='number' placeholder='Amount' sx={styles.user_input} onChange={(e) => setIncomeAmount(e.target.value)} />
                                        <Stack direction={'row'} alignItems='center' gap={3}>
                                            <Box component='button' sx={styles.cancel_button} onClick={onCloseIncomeModal}>Cancel</Box>
                                            <Box component='button' sx={styles.send_button} onClick={onClickCreditButton}>Send</Box>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Modal>
                            {balance === 0 ? null :
                                <>
                                    <Box sx={styles.expenses_container} onClick={onClickExpensesContainer}>
                                        <Box sx={styles.expenses_icons_container}>
                                            <ArrowUpward />
                                            <AccountBalanceWallet />
                                        </Box>
                                        <Box>
                                            <Typography variant='h5'>Expenses</Typography>
                                            <Typography variant='h4'>&#8377; {totalExpenses}</Typography>
                                        </Box>
                                    </Box>

                                    <Modal
                                        open={openExpenses}
                                        onClose={onCloseExpensesModal}
                                    >
                                        <Box sx={styles.modal_content}>
                                            <Typography variant="h6" component="h2">
                                                Debit
                                            </Typography>
                                            <Box component='div' sx={styles.inputs_container}>
                                                <Box component='input' type='number' placeholder='Amount' sx={styles.user_input} onChange={(e) => setExpensesAmount(e.target.value)} />
                                                <Box component='input' type='text' placeholder='Purpose' sx={styles.user_input} onChange={(e) => setPurpose(e.target.value)} />
                                                <Box component='input' type='text' placeholder='Description' sx={styles.user_input} onChange={(e) => setDescription(e.target.value)} />

                                                <Stack direction={'row'} alignItems='center' gap={3}>
                                                    <Box component='button' sx={styles.cancel_button} onClick={onCloseExpensesModal}>Cancel</Box>
                                                    <Box component='button' sx={styles.send_button} onClick={onClickDebitButton}>Send</Box>
                                                </Stack>
                                            </Box>

                                        </Box>
                                    </Modal>
                                </>
                            }
                        </Box>
                    </Box>
                }
                <Box sx={styles.recent_trans_container}>
                    <Box sx={styles.header_row_container}>
                        <Typography variant='h6' color={'#7f3dff'}>Recent Transactions (5)</Typography>
                        <Box component='button' sx={styles.see_all_button} onClick={() => navigate("/AllTransactions", { state: { transactionsList: transactionsList } })}>See All</Box>
                    </Box>

                    <Box component='ul' sx={styles.recent_lists_container}>
                        {recentTransactionsList.map(eachTransaction => (
                            <TransactionItem eachTransaction={eachTransaction} key={eachTransaction.amount} />
                        ))}
                    </Box>

                </Box>
            </Box>
        </Box>
    )
}

export default RecentTransactions

