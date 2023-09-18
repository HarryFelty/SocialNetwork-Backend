const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

//get all thougts/post new thought
router.route('/').get(getThoughts).post(createThought);

//get thought by id/update by id/delete by id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

//add or delete a reaction
router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction);
module.exports = router;