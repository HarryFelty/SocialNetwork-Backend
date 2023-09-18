const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');

//get all users/post new user
router.route('/').get(getUsers).post(createUser);

//get user by id/update by id/delete by id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//add or delete friend
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);
module.exports = router;
