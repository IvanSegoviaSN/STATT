

function returnData(data) {
    let jsonData = {
        tag: data.tag,
        name: data.name,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        statsMain_1: data.expPoints,
        statsMain_2: data.expLevel,
        statsBox_1: data['3vs3Victories'],
        statsBox_2: data.duoVictories,
        statsBox_3: data.soloVictories,
        statsBox_4: data.expPoints%150
    }
    return jsonData
}

module.exports = returnData;