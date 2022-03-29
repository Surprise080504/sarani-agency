import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    HeaderOut,
    LogoImg,
    DropMenus,
    DropMenuItem,
    RightBtn,
    BuildBtn,
    MsgBtn,
    ArrowRight,
    Dropdownlist,
    DropdownlistItem
} from "./Header.style";
import { FaBars } from 'react-icons/fa'
import { BiMessageRounded } from "react-icons/bi";
import { BsArrowRight, BsChevronDown } from "react-icons/bs";
const HeaderContainer = () => {
    const location = useLocation();
    const [dropflag, setDropflag] = useState(false);

    const dropMenuRef = useRef(null);
    const handleClickOutside = (e) => {
        //@ts-ignore
        if (dropMenuRef.current && dropMenuRef.current.contains(e.target)) {  //&& dropMenuRef.current.contains(e.target)
            return;
        }
        setDropflag(false);
    };
    useEffect(() => {
        if (dropflag) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropflag]);
    const showdroplist = () => {
        setDropflag(!dropflag);
    }
    return (
        <HeaderOut>
            <Link to='/'>
                <LogoImg src='img/logodark.png' draggable={false} />
            </Link>
            <DropMenus>
                <DropMenuItem onClick={() => showdroplist()} ref={dropMenuRef}>
                    SOLUTIONS
                    <BsChevronDown className="downIcon" />
                    {
                        dropflag &&
                        <Dropdownlist>
                            <Link to='/art'>
                                <DropdownlistItem>ART</DropdownlistItem>
                            </Link>
                            <DropdownlistItem>RETAIL</DropdownlistItem>
                            <Link to='/corporate'>
                                <DropdownlistItem>CORPORATE</DropdownlistItem>
                            </Link>
                            <DropdownlistItem>LEISURE</DropdownlistItem>
                        </Dropdownlist>
                    }
                </DropMenuItem>
                <Link to={'/project'}>
                    <DropMenuItem>
                        PROJECTS
                    </DropMenuItem>
                </Link>
                <DropMenuItem>
                    {location.pathname === '/offer' ? 'OUR OFFERS' : 'PRICING'}
                </DropMenuItem>
                <Link to='/about'>
                    <DropMenuItem>
                        ABOUT US
                    </DropMenuItem>
                </Link>
            </DropMenus>
            <RightBtn>
                <FaBars className="barStyle" />
                <Link to='/contact'>
                    <BuildBtn>
                        BUILD YOUR PROJECT
                        <ArrowRight className="arrowback">
                            <BsArrowRight className="RightIconWhite" />
                        </ArrowRight>
                    </BuildBtn>
                </Link>
                <MsgBtn>
                    <BiMessageRounded className="MsgIcon_white" />
                </MsgBtn>
            </RightBtn>
        </HeaderOut>
    )

}
export default HeaderContainer;