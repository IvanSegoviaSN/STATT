
function returnData(data) {
    let jsonData = {
        tag: data.tag,
        name: data.name,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        statsMain_1: data.townHallLevel,
        statsMain_2: data.expLevel,
        statsBox_1: data.trophies,
        statsBox_2: data.versusTrophies,
        statsBox_3: data.bestVersusTrophies,
        statsBox_4: data.versusBattleWins
    }
    return jsonData
}

module.exports = returnData;