
function returnData(data) {
    let jsonData = {
        tag: data.tag,
        name: data.name,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        statsMain_1: data.bestTrophies,
        statsMain_2: data.expLevel,
        statsBox_1: data.trophies,
        statsBox_2: data.wins,
        statsBox_3: data.losses,
        statsBox_4: data.totalDonations
    }
    return jsonData
}

module.exports = returnData;