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
module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
}
