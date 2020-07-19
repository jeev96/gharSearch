var mongoose = require("mongoose");

var listingSchema = new mongoose.Schema({
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
         },
        username: {
            type: String,
            required: true
        } 
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    },
    propertyType: {
        type: String,
        default: "FLAT"
    },
    location: {
        place: {
            type: String,
            default: "CHANDIGARH"
        },
        sector: {
            type: String,
        },
        project: {
            type: String,
        },
        block: {
            type: String,
        },
        tower: {
            type: String,
        },
        floor: {
            type: String
        },
        propertyNumber: {
            type: String
        },
        preferentialLocationCharges: {
            type: String
        },
    },
    propertyInfo: {
        images: {
            type: [String],
            default: ["https://d27p8o2qkwv41j.cloudfront.net/wp-content/uploads/2016/07/shutterstock_262923179-e1500871070126.jpg"]
        },
        area: {
            area: Number,
            unit: {
                type: String,
                enum: ["SQFT", "SQ-YARDS", "ACRE"],
                default: "SQFT"
            }
        },
        bhk: {
            type: String
        },
        bedrooms: {
            type: Number
        },
        bathrooms: {
            type: Number
        },
        balconies: {
            type: Number
        },
        otherRooms: {
            type: String
        },
        reservedParking: {
            type: Number
        },
        ageOfProperty: {
            type: Number
        },
        amenities: {
            type: [String]
        },
        waterSource: {
            type: String,
            default: "MUNICIPAL-CORPORATION"
        },
        facing: {
            type: String,
            enum: ["E", "W", "N", "S", "NE", "NW", "SE", "SW"],
            default: "E"
        }, 
        flooring: {
            type: String,
            default: "VETRIFIED"
        },
    },
    ownership: {
        type: String,
        enum: ["FREEHOLD", "LEASEHOLD", "CO-OPERATIVE-SOCIETY", "GPA", "FREEHOLD-AND-REG", "TRANSFER", "LOI", "POA", "REGISTRY-DONE", "NDC", "CD-CASE", "OUSTEE"],
        default: "FREEHOLD"
    },
    price: {
        type: mongoose.Decimal128
    },
    description: {
        type: String
    }, 
    contactInfo: {
        name: String,
        firmName: String,
        type: {
            type: String,
            enum: ["DEALER", "OWNER"]
        },
        phone: [String]
    }
});

module.exports = mongoose.model("Listing", listingSchema);