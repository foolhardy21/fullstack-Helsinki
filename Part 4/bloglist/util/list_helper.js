const lodash = require('lodash')

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const reducer = (sum,item) => {
    return sum + item.likes
  }

  return blogs.length === 0
  ? 0
  : blogs.reduce(reducer,0)
}

const favouriteBlog = (blogs) => {
  if(blogs.length === 0){
    return -1
  }

  let max=-1,pos=0
  for(i=0;i<blogs.length;i++){
    if(blogs[i].likes>max){
      max=blogs[i].likes;
      pos=i;
    }
  }
  return blogs[pos]


}

const mostBlogs = (blogs) => {
  const author_counts = lodash.countBy(blogs, 'author')
  let maxAuthor = ''
  let maxCount = 0

  for (const author in author_counts ) {
    if (author_counts[author] > maxCount) {
      maxCount = author_counts[author]
      maxAuthor = author
    }
  }
  return {
    author: maxAuthor,
    blogs: maxCount
  }
}
module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs,
}
