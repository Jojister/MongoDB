[
    {
      "$lookup": {
        "from": "Trail",
        "localField": "trailID",
        "foreignField": "trailID",
        "as": "trail"
      }
    },
    {
      "$match": {
        "userID": "specificUserID"
      }
    },
    {
      "$count": "safetyCountForUser"
    }
  ]
  