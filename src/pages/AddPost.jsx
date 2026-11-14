import React from 'react';
import { PostForm , Container } from '../Components';

function Addpost() {
    return ( 
        <div className='py-8'>
            <Container>
                <PostForm/>
            </Container>
        </div>
     );
}

export default Addpost;