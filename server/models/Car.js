import moongose from "mongoose";

const carSchema = new moongose.Schema({
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    model: {
        type: String,
        required: true,
        trim: true,
    },
    year: {
        type: Number,
        required: true,
    },
    fuelType: {
        type: String,
        required: true,
        enum: ["Gasoline", "Diesel", "Electric", "Hybrid"],
    },
    pricePerDay: {
        type: Number,
        required: true,
        min:0,
    },
    kilometers: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        default: " ",
    },  
    description: {
        type: String,
        default: " ",
    },
},
    {
    timestamps: true,
    }

);

const Car = moongose.model("Car", carSchema);

export default Car;