import express from 'express';

import { getPosts, createPost, deletePost } from '../controllers/posts.js'

const router = express.Router();
// http://localhost:5000/api/v1/posts

router.get('/', getPosts)
router.post('/', createPost)
router.route('/').delete(deletePost);

export default router;