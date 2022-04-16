// почему-то не работает
// import { useSequelize } from '../../hooks/index.js'
import useSequelize from '../../hooks/useSequelize.js'
import { DataTypes, Model } from 'sequelize'

class File extends Model {}
File.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    file_name: DataTypes.STRING,
    file_size: DataTypes.INTEGER,
    content_type: DataTypes.STRING,
  },
  {
    sequelize: useSequelize(),
    modelName: 'File',
    timestamps: false,
  }
)

export default File
