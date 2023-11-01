import sequelize from "../utils/db.js";
import { Sequelize } from "sequelize";

const User = sequelize.define(
    "User",
    {
        userId: {
            type: Sequelize.UUID,
            primaryKey:true,
            defaultValue: Sequelize.UUIDV4,
            

        }
    }
)