import React from 'react';

interface BusIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    className?: string;
}

const ClimatizacionIcon: React.FC<BusIconProps> = ({ color = 'currentColor', className = '', ...props }) => {
    return (
        <svg
            {...props}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <circle cx="12" cy="12" r="2"/>
            <path d="M12 4a4 4 0 0 1 4 4 2 2 0 0 1-2 2h-1"/>
            <path d="M12 20a4 4 0 0 1-4-4 2 2 0 0 1 2-2h1"/>
            <path d="M4 12a4 4 0 0 1 4-4 2 2 0 0 1 2 2v1"/>
            <path d="M20 12a4 4 0 0 1-4 4 2 2 0 0 1-2-2v-1"/>
        </svg>
    );
};

export default ClimatizacionIcon;
