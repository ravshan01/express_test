// почему-то не работает
// import { useSequelize } from '../../hooks'
import useSequelize from '../../hooks/useSequelize'
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
    file_type: DataTypes.STRING,
    file_size: DataTypes.BIGINT,
  },
  {
    sequelize: useSequelize(),
    modelName: 'File',
    timestamps: true,
  }
)

export default File
