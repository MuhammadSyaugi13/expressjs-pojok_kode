import sequelize from "../utils/db.js";
import { Sequelize } from "sequelize";
import {encrypt} from "../utils/bcrypt.js" 
import moment from "moment"

const User = sequelize.define(
    "User",
    {
        userId: {
            type: Sequelize.UUID,
            primaryKey:true,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull:false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            },
            set(value){
                this.setDataValue("email", value.toLowerCase())
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            set(value){
                this.setDataValue("password", encrypt(value))
            }
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        expireTime: {
            type: Sequelize.DATE,
            set(value){
                if (value !== null){
                    this.setDataValue("expireTime", moment(value).add(1, "hours"))
                }else{
                    this.setDataValue("expireTime", null)
                }
            }
        }
    },{
        tableName: "user",
        underscored: true,
        timestamps:true,
})

sequelize.sync()

export default User
