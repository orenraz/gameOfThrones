module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            url: String,
            name: String,
            region: String,
            coatOfArms: String,
            words: String,
            titles: [{
                type: String
            }],
            seats: [{
                type: String
            }],
            currentLord: String
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const House = mongoose.model("house", schema);
    return House;
};
