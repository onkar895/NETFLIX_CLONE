import User from '../Models/userSchema.js'

export const addToLikeMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id)
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(user._id, {
          likedMovies: [...user.likedMovies, data], 
        }, { new: true }
        )
      } else {
        res.status(500).json({message : "movies already liked"})
      }
    }
    else {
      await User.create({email, likedMovies : [data]})
    }
    return res.json({message : "movies added successfully"})

  } catch (err) {
    res.status(500).json(err, "error while adding movies")
  }
}

export const getLikedMovies = async (req, res) => {
  try {
    const { email } = req.body
    const user = await User.findOne({email})
    if (user) {
      res.status(200).json({movies : user.likedMovies})
    } else {
      res.status(500).json(error, "User with given email not found")
    }
  } catch (err) {
    res.status(500).json("error while getting movies", err)
  }
}