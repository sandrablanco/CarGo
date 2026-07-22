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
        enum: ["Gasoline", "Diesel"],
    },
    price: {
        type: Number,
        required: true,
    },
    kilometers: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        default: "https://res.cloudinary.com/dxjv0gq3f/image/upload/v1698231875/CarGo/default-car-image.jpg",
    },  
    description: {
        type: String,
        default: "No description provided.",
    },
},
    {
    timestamps: true,
    }

);

const Car = moongose.model("Car", carSchema);

export default Car;