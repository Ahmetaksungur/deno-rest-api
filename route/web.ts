import { getBlogs } from '../controller/blog.ts'

async function web(router: any){
router.get('/', getBlogs)
}

export {web}