import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import image1 from  './image1.png';
import image2 from  './image2.png';
import './BlogPost.css';

function BlogPost() {
  return (
    <>
    <div className="blog-post-content">
    
      <img className="photo" src={image1} alt="hell" />
      <img className="photo2" src={image2} alt="hell" />
    
    </div>
    </>
  );
}

export default BlogPost;
