const checkMillionDollarIdea = (req, res, next) => {
    const totalIdea = Number(req.body.numWeeks) * Number(req.body.weeklyRevenue);
    if (modelId !== 'ideas') {
        next();
    } else if (typeof req.body.numWeeks !== 'NaN' && typeof req.body.weeklyRevenue !== 'NaN' && totalIdea >= 100000) {
        next();
    } else {
        res.sendStatus(400);
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
