import React from 'react';
import appwriteService from '../appwrite/config'
import {Link} from 'react-router-dom'

function PostCard({$id , title , featuredImage}) {

    return ( 
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-500 rounded-xl p-4 border border-white/10'>
                <div className='w-full justify-center mb-4'>
                    <img src={appwriteService.getFileView(featuredImage)} alt={title} className='rounded-xl' onError={(e) => console.log("Image loading failed:", e.target.src)}/>
                </div>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
        </Link>
     );
}

export default PostCard;