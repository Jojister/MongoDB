[
    {
      "$lookup": {
        "from": "Description",
        "localField": "trailID",
        "foreignField": "trailID",
        "as": "description"
      }
    },
    {
      "$unwind": "$description"
    },
    {
      "$lookup": {
        "from": "Map",
        "localField": "trailID",
        "foreignField": "trailID",
        "as": "map"
      }
    },
    {
      "$match": {
        "$or": [
          { "description.biome": "Forest" },
          { "description.biome": "Mountain" }
        ]
      }
    },
    {
      "$project": {
        "trailName": 1,
        "description": "$description.description",
        "mapURL": "$map.mapURL",
        "_id": 0
      }
    }
  ]
  