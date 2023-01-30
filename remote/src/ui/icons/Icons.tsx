import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

export const ExclamationCircleOutlineIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <path d='M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z' stroke='currentcolor' strokeWidth='2' />
            <path d='M12 8v4' stroke='currentcolor' strokeWidth='2' strokeLinecap='round' />
            <path d='M12 15.99V16' stroke='currentcolor' strokeWidth='2.25' strokeLinecap='round' />
        </SvgIcon>
    );
};

export const InfoOutlineIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <path d='M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z' stroke='currentcolor' strokeWidth='2' />
            <path d='M12 16v-4' stroke='currentcolor' strokeWidth='2' strokeLinecap='round' />
            <path d='M12 8.01V8' stroke='currentcolor' strokeWidth='2.25' strokeLinecap='round' />
        </SvgIcon>
    );
};

export const SuccessCircleOutlineIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <path
                d='M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z'
                stroke='currentcolor'
                strokeWidth='2'
                fill='none'
            />
            <path
                d='m15.5 9.886-4.813 4.812L8.5 12.511'
                stroke='currentcolor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </SvgIcon>
    );
};

export const XOutlineIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M17.207 8.207a1 1 0 0 0-1.414-1.414L12 10.586 8.207 6.793a1 1 0 0 0-1.414 1.414L10.586 12l-3.793 3.793a1 1 0 1 0 1.414 1.414L12 13.414l3.793 3.793a1 1 0 0 0 1.414-1.414L13.414 12l3.793-3.793z'
                fill='currentcolor'
            />
        </SvgIcon>
    );
};

export const WarningIcon = (props: SvgIconProps) => {
    return (
        <SvgIcon
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...props}
        >
            <circle cx='12' cy='12' r='8' stroke='black' strokeWidth='2' />
            <path
                d='M8 12H16'
                stroke='black'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </SvgIcon>
    );
};