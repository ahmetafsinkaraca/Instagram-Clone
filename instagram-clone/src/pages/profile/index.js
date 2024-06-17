import {getUserInfo} from "route/firebase.js";
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom'
import Header from "./components/header";
import classNames from "classnames";
import Icon from "components/Icon";
import ProfilNotFound from "./not-found";
import { Helmet } from "react-helmet";

export default function ProfileLayout() {

    const navigate = useNavigate()
    const [loading, setloading] = useState(true)
    const {username} = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserInfo(username)
        .then(user => {
            setUser(user)
        })
        .catch(err => {
            setUser(false)
         })
        }, [])

        if(user === false){
            return <ProfilNotFound/>
        }

        if(user === null){
            return(
                <div>
                    Loading...
                </div>
            )
        }

        
  return user && (
    <div>
                <Helmet>
            <title>{user.fullName} (@{user.username}) • Instagram photos and videos</title>
        </Helmet>
        <Header user={user}/> 
        <nav className="border-t flex justify-center items-center gap-x-12 ">
            <NavLink to={`/${username}`} end={true} className={({isActive}) => classNames ({
                 'text-xs flex border-t items-center gap-x-2 font-semibold py-5 tracking-widest' : true,
                'border-transparent text-[#8e8e8e]': !isActive,
                'border-black text-black': isActive
            })}>
                  <Icon name='post' size={12} />
                POSTS
           </NavLink>
           <NavLink to={`/${username}/tagged`} end={true} className={({isActive}) => classNames ({
                 'text-xs flex border-t items-center gap-x-2 font-semibold py-5 tracking-widest' : true,
                'border-transparent text-[#8e8e8e]': !isActive,
                'border-black text-black': isActive
            })}>
                  <Icon name='tag' size={12} />
                TAGGED
           </NavLink>
        </nav>
        <Outlet/>
    </div>
  )
}
