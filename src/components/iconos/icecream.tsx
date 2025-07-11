import React from 'react';

interface BusIconProps extends React.SVGProps<SVGSVGElement> {
    color?: string;
    className?: string;
}

const IceCreamIcon: React.FC<BusIconProps> = ({ color = 'currentColor', className = '', ...props }) => {
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
            <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"/>
            <path d="M17 7A5 5 0 0 0 7 7"/>
            <path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"/>
        </svg>
    );
};

export default IceCreamIcon;
