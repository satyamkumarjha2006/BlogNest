import React from 'react';
import { PostForm , Container } from '../Components';

function Addpost() {
    return ( 
        <div className='py-8 w-full max-w-full'>
            <Container>
                <PostForm/>
            </Container>
        </div>
     );
}

export default Addpost;