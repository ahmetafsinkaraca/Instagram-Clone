import React from 'react'

export default function Header({ user }) {

	return (
		<header className='flex items-center px-24 gap-x-24 pb-10 py-4'>
			 <div >
			<img src="/no-avatar.jpeg" alt='' className='w-[150px] h-[150px] rounded-full'></img>
			</div>

			<div>
			<p className='text-[28px] font-light'>{user.username}</p>
				<nav className='flex items-center gap-x-10 py-3'>
					<div className='flex items-center gap-3'><li className='font-semibold list-none'>{user.posts} </li>posts</div>
					<div className='flex items-center gap-3'><li className='font-semibold list-none'>{user.followers.length}</li>followers</div>
					<div className='flex items-center gap-3'><li className='font-semibold list-none'>{user.following.length}</li>following</div>
				</nav>
			</div>
		</header>
	)
}
