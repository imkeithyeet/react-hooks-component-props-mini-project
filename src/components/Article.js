import React from 'react';



function makeEmojis(minutes){
    const emoji=minutes<30 ? "☕️":"🍱"
    const interval=minutes<30 ? 5:10
    const numEmojis=Math.ceil(minutes/interval)
    const emojiArr=emoji.repeat(numEmojis)

    // while (numEmojis>0){
    //     emojiArr +=emoji
    //     numEmojis -=1
    // // }
    return emojiArr
}   
function  Article({title,preview,minutes,date="January 1,1970"})
{


    return (
        <article>
            <h3>{title}</h3>
            <small>{date} {makeEmojis(minutes)}</small>
            <p>{preview}</p>   
         </article>
    )
}

export default Article;






