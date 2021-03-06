async function getBlogs(){

    const url= 'https://firefighter-5325.instashop.ae/api/landmarks'
    const response=await fetch(url)

    console.log(response)

    if(!response.ok){
        throw new Error(response.status)
    }

    const blogs=await response.json()
    return blogs
}

async function getBlog(id){
    const url=`https://firefighter-5325.instashop.ae/api/landmarks/${id}`
    const response=await fetch(url)

    console.log(response)

    if(!response.ok){
        throw new Error(response.status)
    }

    const currentBlog=await response.json()
    return currentBlog

}

async function updateBlog(blog,user){
    const url=`https://firefighter-5325.instashop.ae/api/landmarks/${blog.objectId}`
    const response = await fetch(url, {
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

	if(!response.ok){
		throw new Error(response.status)
	}
}

export {
    getBlogs,
    getBlog,
    updateBlog,
}