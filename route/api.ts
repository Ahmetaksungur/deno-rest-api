import { getBlogs, getBlog, addBlog, updateBlog, deleteBlog } from '../controller/blog.ts'

async function api(router: any){
router.get('/blogs', getBlogs)
      .get('/blogs/:id', getBlog)
      .post('/blogs', addBlog)
      .put('/blogs/:id', updateBlog)
      .delete('/blogs/:id', deleteBlog)
}

export {api}