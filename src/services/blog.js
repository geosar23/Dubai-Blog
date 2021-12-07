async function getBlogs(){
    const url= 'https://firefighter-5325.instashop.ae/api/landmarks'

    const response=await fetch(url)
    const blogs=await response.json()
    return blogs
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
    updateBlog
}