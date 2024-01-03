import React, { useState } from 'react';
import { FaPeopleLine } from "react-icons/fa6";
import { GiFishingNet } from "react-icons/gi";
import { IoIosSettings } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import "./styles/Nav.css";




const Nav = () => {
    const [index, setIndex] = useState(0)
    const [res, setRes] = useState(false)

    const navLinks = [
        {
            name: "Dashboard",
            link: <MdDashboard />
        },
        {
            name: "Insights",
            link: <FaPeopleLine />
        },
        {
            name: "Reports",
            link: <TbReportSearch />
        },
        {
            name: "Settings",
            link: <IoIosSettings />
        }
    ]

    const clickRes = () => {
        setRes((x) => !x)
    }
    return (<>
        <div className={res ? "resHam fixResHam" : "resHam "} onClick={clickRes}><RxHamburgerMenu /></div>
        <nav className={res ? 'navContainer resNavContainer' : 'navContainer'}>
            <div className='indvLinks'>
                <span className='icon iconLogo'>{<GiFishingNet />}</span>
                <span className='neters'>neters</span>
            </div>
            {
                navLinks.map((items, id) => {
                    return <div key={items.name} onClick={() => setIndex(id)} className={id === index ? "indvLinks slectedLinks" : 'indvLinks'}>
                        <span className='icon'>{items.link}</span>
                        <span className='linkName'>{items.name}</span>
                    </div>
                })
            }
        </nav>
    </>
    )
}

export default Nav