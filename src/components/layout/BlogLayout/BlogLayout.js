import React from 'react';
import styles from './BlogLayout.module.scss';

import BlogPosts from '../../features/BlogPosts/BlogPosts';
import BlogRecentPosts from '../../features/BlogRecentPosts/BlogRecentPosts';
import BlogCategories from '../../features/BlogCategories/BlogCategories';
import BlogPost from '../../features/BlogPost/BlogPost';
import { useParams } from 'react-router-dom';

const BlogLayout = () => {
  const { blogPostId } = useParams();

  return (
    <div className={styles.root}>
      <div className={`container ${styles.mainContainer}`}>
        <div className='row'>
          <div className='col-md-9 col-12'>
            {blogPostId ? <BlogPost blogPostId={blogPostId} /> : <BlogPosts />}
          </div>
          <div className='d-none d-md-block col-3 mt-3'>
            <BlogRecentPosts />
            {!blogPostId && <BlogCategories />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLayout;
