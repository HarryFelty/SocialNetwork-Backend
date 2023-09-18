const User = require('../models/User');

module.exports = {
  //get all users
  async getUsers(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //get single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const newUser = await User.create({
        username: req.body.username,
        email: req.body.email
      });
      res.json(newUser);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //update user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate({ _id: req.params.userId },
        {
          username: req.body.username,
          email: req.body.email
        });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.status(200).json({ message: 'User updated.' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //delete user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.status(200).json({ message: 'User deleted.' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //add a friend
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.status(200).json({ message: 'Friend added!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  //delete a friend
  async deleteFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true });

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      res.status(200).json({ message: 'Friend removed.' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
