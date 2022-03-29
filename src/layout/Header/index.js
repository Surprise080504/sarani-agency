import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
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
import { BiMessageRounded } from "react-icons/bi";
import { BsArrowRight, BsChevronDown } from "react-icons/bs";
const HeaderContainer = () => {
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
                <LogoImg src='img/logo.png' draggable={false} />
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
                <Link to='/project'>
                    <DropMenuItem>
                        PRICING
                    </DropMenuItem>
                </Link>
                <Link to='/about'>
                    <DropMenuItem>
                        ABOUT US
                    </DropMenuItem>
                </Link>
            </DropMenus>
            <RightBtn>
                <FaBars className="barStylewhite" />
                <Link to='/contact'>
                    <BuildBtn>
                        BUILD YOUR PROJECT
                        <ArrowRight>
                            <BsArrowRight className="RightIcon" />
                        </ArrowRight>
                    </BuildBtn>
                </Link>
                <MsgBtn>
                    <BiMessageRounded className="MsgIcon" />
                </MsgBtn>
            </RightBtn>
        </HeaderOut>
    )

}
export default HeaderContainer;