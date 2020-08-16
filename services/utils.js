
module.exports = {
    getSearchObj: function (data) {
        let obj = {};
        data.type ? obj["propertyType.type"] = data.type : "";
        data.subType ? obj["propertyType.subtype"] = data.subType : "";
        data.priceFrom ? obj["price"] = { $gte: data.priceFrom } : "";
        data.priceTo ? obj["price"] = { $lte: data.priceTo } : "";
        data.areaFrom ? obj["propertyInfo.area.area"] = { $gte: data.areaFrom } : "";
        data.areaTo ? obj["propertyInfo.area.area"] = { $lte: data.areaTo } : "";
        data.yearFrom ? obj["propertyInfo.builtYear"] = { $gte: data.yearFrom } : "";
        data.yearTo ? obj["propertyInfo.builtYear"] = { $lte: data.yearTo } : "";
        data.bedroomFrom ? obj["propertyInfo.bedrooms"] = { $gte: data.bedroomFrom } : "";
        data.bedroomTo ? obj["propertyInfo.bedrooms"] = { $lte: data.bedroomTo } : "";
        data.bathroomFrom ? obj["propertyInfo.bathrooms"] = { $gte: data.bathroomFrom } : "";
        data.bathroomTo ? obj["propertyInfo.bathrooms"] = { $lte: data.bathroomTo } : "";
        data.parkingFrom ? obj["propertyInfo.reservedParking"] = { $gte: data.parkingFrom } : "";
        data.parkingTo ? obj["propertyInfo.reservedParking"] = { $lte: data.parkingTo } : "";
        data.place ? obj["location.place"] = data.place : "";
        data.sector ? obj["location.sector"] = data.sector : "";
        data.project ? obj["location.project"] = data.project : "";

        return obj;
    }
}