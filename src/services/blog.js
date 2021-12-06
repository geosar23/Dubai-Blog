async function getBlogs(){
    const url= 'https://firefighter-5325.instashop.ae/api/landmarks'

    const response=await fetch(url)
    const blogs=await response.json()
    return blogs
}

export {getBlogs}