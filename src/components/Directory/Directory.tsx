import React from 'react';
import Page from './Page';

interface DirectoryProps {
    treeData: any;
    Icons?: any[];
    className?: string;
}

import './Directory.scss';

const Directory: React.FC<DirectoryProps> = ({ treeData, Icons = [], className }) => {

    if (!treeData || !treeData.length) {
        return null;
    }

    return (
        <>
            {treeData.map((node: any, index: any) => {
                const Icon = Icons[index];
                return <Page key={node.key} node={node} Icon={Icon} className={className} />;
            })}
        </>
    );
};

export default Directory;
