[
    {
      "$match": {
        "$and": [
          { "distance": { "$gt": 5 } },
          { "elevationChange": { "$gt": 500 } },
          { "difficulty": { "$gt": 2 } }
        ]
      }
    }
  ]
  