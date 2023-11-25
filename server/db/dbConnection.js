import mongoose, { mongo } from "mongoose"

const dbConnection = async (uri) => {
  try {
      let connection = await mongoose.connect(uri)
      console.log('DB is connected!')
  } catch (error) {
    console.log(error)    
  }
}

export default dbConnection