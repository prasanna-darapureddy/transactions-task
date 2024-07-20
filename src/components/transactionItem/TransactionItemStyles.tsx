import { SxProps } from "@mui/material";

export const styles = {
    item_container: {
        listStyleType: 'none',
        paddingInlineStart: '0px',
        paddingRight: '0px',
        paddingLeft: '0px',
        display: 'flex',
        alignItems: 'center',
        alignContent: "flex-start",
        justifyContent: 'space-between',
        padding: { xs: '5px', sm: '8px', md: '10px', lg: '20px' },
    },
    icon_container: {
        backgroundColor: '#EEE5FF', borderRadius: 40, padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center',
        height: { xs: '20px', sm: '35px', md: '40px' },
        width: { xs: '20px', sm: '35px', md: '40px' },
    },
    icons: {
        color: '#43286b', fontWeight: 600,
        fontSize: { xs: '16px', sm: '20px', md: '25px' }
    }
} satisfies Record<string, SxProps>