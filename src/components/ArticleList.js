import React from 'react';
import Article from './Article'

function ArticleList({posts}){
   

const articlesArr = posts.map(post =>(
    <Article key={post.id} {...post}/>
    

))
     return (
    <main>
    {articlesArr}
    </main>
    )
}







export default ArticleList