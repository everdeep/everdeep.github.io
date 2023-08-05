// Markdown.tsx

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter';
import rangeParser from 'parse-numeric-range';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Copy, Tick } from '@src/Icons';
import { Tooltip } from 'react-tooltip';
import { connect } from 'react-redux';
import { alertSet } from '@src/actions';

import './Markdown.scss';

type MarkdownProps = {
    markdown: string & { content?: string };
    alertSet: (message: string, type: string) => void;
};

const Markdown: React.FC<MarkdownProps> = ({ markdown, alertSet }) => {
    const [isCopied, setIsCopied] = useState<boolean>(false);
    const syntaxTheme = nord;

    const onCopy = (code: string) => {
        setIsCopied(true);
        alertSet('Copied!', 'success');
        setTimeout(() => {
            setIsCopied(false);
        }, 2000);

        navigator.clipboard.writeText(code);
    };

    const MarkdownComponents: object = {
        code({ node, inline, className, ...props }: any) {
            const hasLang = /language-(\w+)/.exec(className || '');
            const hasMeta = node?.data?.meta;

            const applyHighlights: object = (applyHighlights: number) => {
                if (hasMeta) {
                    const RE = /{([\d,-]+)}/;
                    const metadata = node.data.meta?.replace(/\s/g, '');
                    const strlineNumbers = RE?.test(metadata)
                        ? RE?.exec(metadata)[1]
                        : '0';
                    const highlightLines = rangeParser(strlineNumbers);
                    const highlight = highlightLines;
                    const data: string = highlight.includes(applyHighlights)
                        ? 'highlight'
                        : null;
                    return { data };
                } else {
                    return {};
                }
            };

            return hasLang ? (
                <div className='codeblock'>
                    <SyntaxHighlighter
                        style={syntaxTheme}
                        language={hasLang[1]}
                        PreTag='div'
                        className='codeStyle'
                        showLineNumbers={true}
                        wrapLines={hasMeta}
                        useInlineStyles={true}
                        lineProps={applyHighlights}
                    >
                        {props.children}
                    </SyntaxHighlighter>
                    {isCopied ? (
                        <Tick className='stroke accent'/>
                    ) : (
                        <>
                            <Copy
                                className='stroke hover'
                                data-tooltip-id='copy-tooltip'
                                data-tooltip-content='Copy'
                                onClick={() => onCopy(node.children[0].value)}
                            />
                            <Tooltip id='copy-tooltip' />
                        </>
                    )}
                </div>
            ) : (
                <code className={className} {...props} />
            );
        },
    };

    return (
        <ReactMarkdown components={MarkdownComponents}>
            {markdown.content}
        </ReactMarkdown>
    );
};

const mapStateToProps = (state: any) => {}

export default connect(
    mapStateToProps,
    { alertSet }
)(Markdown);