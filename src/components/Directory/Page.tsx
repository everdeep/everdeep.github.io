import React, { useState } from 'react';
import cn from 'classnames';
import Directory from './Directory';
import { NavLink } from 'react-router-dom';
import { ArrowLeftShort, ArrowRightShort } from '@src/Icons';

interface PageProps {
    node: {
        key: string;
        label: string;
        children: any;
        path: string;
    };
    Icon: any;
    className?: string;
}

const MAX_HEIGHT = 120;
const LINK_HEIGHT = 30;

const Page: React.FC<PageProps> = ({ node, Icon, className }) => {
    const { key, children, label, path } = node;

    const [showChildren, setShowChildren] = useState(false);

    const handleClick = () => {
        setShowChildren(!showChildren);

        let maxHeight =
            children.length * LINK_HEIGHT > MAX_HEIGHT
                ? MAX_HEIGHT
                : children.length * LINK_HEIGHT;

        if (showChildren) {
            document.getElementById(key)!.style.maxHeight = '0px';
        } else {
            document.getElementById(key)!.style.maxHeight = `${maxHeight}px`;
        }
    };

    if (path) {
        return (
            <>
                <NavLink className={cn(className)} to={path}>
                    {Icon && children && (
                        <ArrowRightShort
                            className={cn(`${className}__dir`, {
                                open: showChildren,
                            })}
                            onClick={handleClick}
                        />
                    )}
                    {Icon && <Icon className="icon fill" />}
                    <span>{label}</span>
                </NavLink>
                <ul id={key} className={cn('subMenu', { open: showChildren })}>
                    <Directory treeData={children} className={className} />
                </ul>
            </>
        );
    }

    return (
        <>
            <div className={cn(`${className}__dir`, { open: showChildren })}>
                {Icon && (
                    <ArrowRightShort
                        className={`${className}__dir`}
                        onClick={handleClick}
                    />
                )}
                {Icon && <Icon className='icon fill' />}
                <span>{label}</span>
            </div>
            <ul id={key} className={cn('subMenu', { open: showChildren })}>
                <Directory treeData={children} className={className} />
            </ul>
        </>
    );
};

export default Page;
