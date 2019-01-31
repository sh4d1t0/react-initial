// @flow
// depencendies
import express from 'express'
// data
import posts from '@server/api/data/posts'

// express router
const router = express.Router()
router.get('/blog/posts', (req, res) => res.json(posts))
export default router
