import { toast } from 'react-toastify'

type toastType = 'success' | 'error' | 'warning' | 'info';

interface ToastProps {
    (type: toastType, message: string): void;
}

const Toast: ToastProps = (type, message = "Technical error occured") => {
    return void toast[type](message)
}

export default Toast;