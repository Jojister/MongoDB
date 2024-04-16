[
    {
      "$lookup": {
        "from": "Report",
        "localField": "userID",
        "foreignField": "userID",
        "as": "reports"
      }
    },
    {
      "$unwind": "$reports"
    },
    {
      "$lookup": {
        "from": "Trail",
        "localField": "reports.trailID",
        "foreignField": "trailID",
        "as": "trail"
      }
    },
    {
      "$match": {
        "$and": [
          { "reports.date": { "$gt": "2023-01-01" } },
          { "admin": true }
        ]
      }
    },
    {
      "$project": {
        "name": 1,
        "reportDescription": "$reports.reportDescription",
        "trailName": "$trail.trailName",
        "_id": 0
      }
    }
  ]
  