
function errorHandlingMiddleware(err, req, res, next) {
    // Log the error internally
    console.error(err);

    // Check the type of error and set response accordingly
    if (err.isValidationError) {
        return res.status(400).json({ message: "Validation Error", details: err.details });
    }

    // Default to 500 server error
    return res.status(500).json({ message: "Internal Server Error" });
}

module.exports = errorHandlingMiddleware;