import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';

const Blog = () => {
  // Dummy blog data
  const blogPosts = [
    {
      id: 1,
      title: 'Introduction to React',
      author: 'John Doe',
      date: 'March 1, 2022',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi aliquet, volutpat nisl id, scelerisque nisi...',
      authorPhoto: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg', // Path to John Doe's photo
    },
    {
      id: 2,
      title: 'Getting Started with CSS Grid',
      author: 'Jane Smith',
      date: 'March 5, 2022',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi aliquet, volutpat nisl id, scelerisque nisi...',
      authorPhoto: 'https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?t=st=1711652838~exp=1711656438~hmac=25642cd45d7e37c71da18dd148a03abad360eadc79086a427927d3a9eb3f6abc&w=996', // Path to Jane Smith's photo
    },
    {
      id: 4,
      title: 'Getting Started with CSS Grid',
      author: 'Jane Smith',
      date: 'March 5, 2022',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi aliquet, volutpat nisl id, scelerisque nisi...',
      authorPhoto: 'https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?t=st=1711652838~exp=1711656438~hmac=25642cd45d7e37c71da18dd148a03abad360eadc79086a427927d3a9eb3f6abc&w=996', // Path to Jane Smith's photo
    },
    {
      id: 5,
      title: 'Getting Started with CSS Grid',
      author: 'Jane Smith',
      date: 'March 5, 2022',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi aliquet, volutpat nisl id, scelerisque nisi...',
      authorPhoto: 'https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?t=st=1711652838~exp=1711656438~hmac=25642cd45d7e37c71da18dd148a03abad360eadc79086a427927d3a9eb3f6abc&w=996', // Path to Jane Smith's photo
    },
    {
      id: 6,
      title: 'Getting Started with CSS Grid',
      author: 'Jane Smith',
      date: 'March 5, 2022',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget nisi aliquet, volutpat nisl id, scelerisque nisi...',
      authorPhoto: 'https://img.freepik.com/free-vector/organic-flat-blog-post-illustration-with-people_23-2148955260.jpg?t=st=1711652838~exp=1711656438~hmac=25642cd45d7e37c71da18dd148a03abad360eadc79086a427927d3a9eb3f6abc&w=996', // Path to Jane Smith's photo
    },
  
    // Add more blog posts as needed
  ];

  // State to track expanded state and click status for each post
  const [expandedPosts, setExpandedPosts] = useState({});

  // Function to toggle expanded state and set clicked post
  const toggleExpand = (postId) => {
    setExpandedPosts(prevState => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  // Function to get the color class for the card
  const getCardColorClass = (postId) => {
    return expandedPosts[postId] ? 'bg-blue-300' : '';
  };

  return (
    <div className='m-10px' id="blog">
      
      <div className='cta_blog'></div>
      <div className="container mb-6">
        <div className='p-10'>
        <h2 className=" text-center text-3xl text-blue-900 uppercase font-bold">Blog</h2>
        <div className='flex justify-center'>
         <div className='w-24 border-b-4 border-blue-900'></div>
      </div>

        </div>
       
        <div className="row justify-content-center relative">
          {blogPosts.map(post => (
            <div key={post.id} className="col-lg-6 mb-20 mt-4 ">
              <div className={`card relative hover:shadow-2xl shadow-lg hover:shadow-inherit gap-3 ${getCardColorClass(post.id)}`}>
                <div className="card-body" onClick={() => toggleExpand(post.id)}>
                  {/* Render author's image */}
                  <img src={post.authorPhoto} alt={post.author} className="author-photo" />
                  <h5 className="card-title">{post.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted ">{post.author}</h6>
                  <p className="card-text">
                    {expandedPosts[post.id] ? post.content : `${post.content.slice(0, 100)}...`}
                  </p>
                  <button className="btn btn-link">
                    {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
                  </button>
                  <p className="card-text"><small className="text-muted">Published on {post.date}</small></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Blog;
