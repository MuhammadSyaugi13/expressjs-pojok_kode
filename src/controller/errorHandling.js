const errorHandling = (err, req, res, next) => {
    console.log("err err ")
    console.log("err err ")
    console.log([err.message])
    res.status(500).json({
        errors: [err.message],
        message: "Internal server error!",
        data: null,
    })
}

export { errorHandling }