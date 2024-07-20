export const styles = {
    bg_container: {
        backgroundColor: { md: '#43286b', lg: '#43286b', },
        padding: { sm: '15px', lg: '20px 40px', },
        minHeight: '100vh',
    },
    content_container: {
        padding: '40px', borderRadius: '20px', display: 'flex', flexDirection: 'column',
        backgroundImage: { xs: 'linear-gradient(#fff6e5, #fff)', }
    },
    profile_container: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    },
    profile_img: {
        height: { sm: '30px', md: '50px', lg: '70px' },
        width: { sm: '30px', md: '50px', lg: '70px' }
    },
    select_user_input: {
        borderRadius: '10px', outline: 'none',
        width: { xs: '120px', sm: '150px', md: '200px' }
    },

    profile_bell_icon: {
        color: '#7f3dff',
        fontSize: { sm: '20px', md: '30px', }
    },

    balance_service_container: {
        display: { sm: 'flex' },
        flexDirection: { sm: 'column', lg: 'row' },
        justifyContent: { sm: 'center', lg: 'space-between' },
        alignItems: { xs: 'center' },
        margin: { sm: '30px 0px' }
    },
    zero_balance_container: {
        alignSelf: { md: 'center' },
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '40px'
    },
    balance_container: {
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '40px'
    },

    balance_text: {
        fontSize: { sm: '14px', md: '16px', lg: '18px' }, color: '#91919F', fontWeight: 500
    },

    services_container: {
        display: { xs: 'flex' },
        flexDirection: { xs: 'column', sm: 'row', md: 'row', },
        alignItems: { xs: 'center' },
        justifyContent: { xs: 'center', },
        gap: { xs: '10px' },
        marginTop: '30px',
    },

    income_container: {
        backgroundColor: '#00A86B', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', color: '#fff', gap: '10px', cursor: 'pointer',
        width: { xs: '200px', md: '230px', lg: '250px' }
    },
    income_icons_container: {
        borderRadius: 5, marginRight: '10px', backgroundColor: '#fff', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#00A86B', width: '50px', fontSize: '20px',
    },
    expenses_container: {
        cursor: 'pointer', disable: true, backgroundColor: '#FD3C4A', borderRadius: 10, padding: '12px 20px', display: 'flex', alignItems: 'center', color: '#fff', gap: '10px',
        width: { xs: '200px', md: '230px', lg: '250px' }
    },
    expenses_icons_container: {
        borderRadius: 5, marginRight: '10px', backgroundColor: '#fff', padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '50px', fontSize: '20px', color: '#FD3C4A'
    },

    recent_trans_container: { marginTop: '50px', display: 'flex', flexDirection: 'column', },

    header_row_container: {
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px',
        fontSize: { xs: '15px', sm: '17px', md: '20px' },

    },

    see_all_button: {
        cursor: 'pointer', backgroundColor: '#EEE5FF', borderRadius: 40, padding: '10px', border: 'none', outline: 'none', color: '#7f3dff', fontWeight: 500, width: '90px'

    },

    recent_lists_container: {
        display: 'flex', flexDirection: 'column', listStyleType: 'none', paddingInlineStart: '0px',
        padding: { xs: '0px 4px', md: '0px 40px' }
    },

    modal_content: {
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, padding: '40px', outline: 'none', borderRadius: '20px',
        width: { xs: '150px', sm: '200px', md: '300px', lg: '500px' },
    },
    inputs_container: {
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, marginTop: '20px'
    },
    user_input: {
        border: 'none', outline: 'none', borderRadius: '40px', padding: '10px', backgroundColor: '#f2f2f2'
    },
    cancel_button: {
        backgroundColor: 'transparent', border: '1px solid #43286b', fontWeight: '600', color: '#43286b', outline: 'none', borderRadius: '20px', padding: '10px', width: '100px', cursor: 'pointer',
    },
    send_button: {
        backgroundColor: '#43286b', border: '1px solid #43286b', fontWeight: '600', color: '#fff', outline: 'none', borderRadius: '20px', padding: '10px', width: '100px', cursor: 'pointer',
    }
}


