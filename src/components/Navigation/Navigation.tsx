import React, { useState } from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import {
    icons,
    Fire,
    MenuAltLeft,
    MenuAltRight,
    Github,
    Linkedin,
    Sun,
    Moon,
    Home,
    Blog,
    Mail,
    Flask,
} from '@src/Icons';
import { AppContextInterface, withAppContext } from '@components/App/AppContext';
import { Cube, CubeWrapped } from '@components/Animations';
import Directory from '@components/Directory';
import Divider from '@components/Divider';
import { navDirectory } from './Nav';
import ProfilePic from '@images/profile.png';

import './Navigation.scss';

const Navigation: React.FC = ({ appContext }: { appContext: AppContextInterface }) => {
    const [open, setOpen] = useState(true);

    return (
        <div className={cn('navigation__container no-select', { open: open })}>
            {/* Menu collapse toggle */}
            {/* {open ? (
                <MenuAltLeft id='navToggle' className='stroke hover' onClick={() => setOpen(!open)} />
            ) : (
                <MenuAltRight id='navToggle' className='stroke hover' onClick={() => setOpen(!open)} />
            )} */}

            {/* Toggle theme */}
            {appContext.darkTheme ? (
                <Sun
                    id='themeToggle'
                    className={cn({ hidden: !open }, 'fill hover')}
                    onClick={() => appContext.toggleTheme()}
                />
            ) : (
                <Moon
                    id='themeToggle'
                    className={cn({ hidden: !open }, 'fill hover')}
                    onClick={() => appContext.toggleTheme()}
                />
            )}

            {/* Nav header */}
            <div className={cn('navigation__header', { collapsed: !open })}>
                {open ? (
                    <>
                        <img id='profilePic' src={ProfilePic} />
                        <div id='info' className='center'>
                            <NavLink to='/'>
                                <h1>Sebastian Bird</h1>
                            </NavLink>
                            <p>Fullstack Developer</p>
                            <Divider className='accent' tag='Technologies' />
                            <div id='skillbar'>
                                {Object.entries(icons)?.map(([key, value], index) => {
                                    return (
                                        <div key={index} className='skillbar__item'>
                                            <img src={value} />
                                        </div>
                                    );
                                })}
                                <Flask className='icon fill' />
                            </div>
                            <Divider tag='Interests' />
                            <ul>
                                <li>Machine Learning</li>
                                <li>Computer Vision</li>
                                <li>Data science</li>
                                <li>Renewable Technology</li>
                                <li>Smart Farming</li>
                                <li>Physics</li>
                            </ul>
                            <Divider className='accent' />
                        </div>
                    </>
                ) : (
                    <NavLink className={cn('menu-item center vertical')} to='/'>
                        <Home className='icon fill hover' />
                    </NavLink>
                )}
            </div>

            {/* Social links */}
            <div className={cn('navigation__social', { vertical: !open })}>
                <a href='mailto:sebbird10@gmail.com'>
                    <Mail id='mailIcon' className='icon stroke hover' />
                </a>
                <a href='https://github.com/everdeep' target='_blank'>
                    <Github className='icon fill hover' />
                </a>
                <a href='https://www.linkedin.com/in/sebbird/' target='_blank'>
                    <Linkedin className='icon fill hover' />
                </a>
            </div>

            <Divider className='accent' />

            {/* Nav body */}
            <div className='navigation__body'>
                {/* Menu directory */}
                {/* <div className={cn('menu', { collapsed: !open })}>
                    {open ? (
                        <Directory
                            treeData={navDirectory}
                            Icons={[CubeWrapped, Blog, Fire]}
                            className='menu-item'
                        />
                    ) : (
                        <>
                            <NavLink
                                className='menu-item vertical'
                                to='/projects'
                            >
                                <CubeWrapped className='icon center' />
                            </NavLink>
                            <NavLink className='menu-item vertical' to='/wiki'>
                                <Fire className='icon fill hover' />
                            </NavLink>
                        </>
                    )}
                </div> */}
            </div>
        </div>
    );
};

export default withAppContext(Navigation);
