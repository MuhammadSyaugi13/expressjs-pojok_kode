import sequelize from "../utils/db.js"
import User from "../models/userModel.js"

const setUser = async (req, res, next) => {
    try {
        const t = await sequelize.transaction()
        const userss = req.body

        const newUser = await User.create({
            ...userss,
            expireTime: new Date(),
        },{
            transaction: t
        });

        await t.commit()
        res.status(201).json({
            errors: null,
            message: "User created successfuly",
            data: {
                userId: newUser.userId,
                name: newUser.name,
                email: newUser.email,
                expireTime: newUser.expireTime
            }
        })
    } catch (error) {
        console.log(error.message)
        // next(new Error("controllers/userController.js:setUser: "+error.message))
        next(error)
    }
}

export {setUser}