import { toast } from 'react-toastify'

type toastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
    (type: toastType, message: string): void;
}

export const Toast: ToastProps = (type, message = "Technical error occured") => {
    return void toast[type](message)
}