"use client"
import * as React from 'react';
// import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars() {
    const [open, setOpen] = React.useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <Snackbar open={open} autoHideDuration={10000} transitionDuration={2800} onClose={handleClose}>
                <Alert
                    variant="filled"
                    className='md:p-4 p-2'
                    onClose={handleClose}
                    severity="success"

                    //  message=""
                    sx={{ width: '100%', background: '#060656' }}
                >
                    <h4 className='font-myfont font-bold text-sm '>You can create your own account or log in with an admin account :</h4>
                    <div className='flex flex-wrap mt-4 justify-center items-center  '>
                        <h6 className='font-myfont font-bold w-full text-[#aeaeffed] mt-3'><span className='font-myfont font-bold text-white'>Email :</span> admin@gmail.com</h6>
                        <h6 className='font-myfont mb-3 font-bold w-full text-[#aeaeffed] mt-3'><span className='font-myfont font-bold text-white'>Password :</span> Admin5050#</h6>
                    </div>
                </Alert>
            </Snackbar>
        </div>
    );
}