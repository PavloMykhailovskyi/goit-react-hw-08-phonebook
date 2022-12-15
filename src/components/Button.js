import { Button as MUIButton } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Button = ({ sx, to, size, variant = 'text', children }) => {
    return (
        <MUIButton
            sx={sx}
            to={to}
            component={NavLink}
            variant={variant}
            size={size}
        >
            {children}
        </MUIButton>
    )
}