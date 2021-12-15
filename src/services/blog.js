async function getBlogs(){

    const url= 'https://firefighter-5325.instashop.ae/api/landmarks'
    const response=await fetch(url)

    if(!response.ok){
        throw new Error(response.status)
    }

    const blogs=await response.json()
    return blogs
}

async function getBlog(id){
    const url=`https://firefighter-5325.instashop.ae/api/landmarks/${id}`
    const response=await fetch(url)
    const currentBlog=await response.json()
    return currentBlog
}

async function updateBlog(blog,user){
    const url=`https://firefighter-5325.instashop.ae/api/landmarks/${blog.objectId}`
    await fetch(url, {
		method: 'PUT',
		headers: { 
            'Content-Type': 'application/json' ,
            'x-sessionToken': user.sessionToken
        },
		body: JSON.stringify({
			title:blog.title,
            short_info:blog.short_info,
            description:blog.description	
		})
	})
}

export {
    getBlogs,
    getBlog,
    updateBlog,
}