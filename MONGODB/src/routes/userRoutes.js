import { Router } from "express";
import { User } from "../models/user.js";
import { City } from "../models/cities.js";

const router = Router();

router.post("/create", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json({ message: "User created", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/city", async (req, res) => {
  try {
    const city = await City.create(req.body);
    res.json({ message: "city created", city })
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
})

router.get("/", async (req, res) => {
  try {

    // const users  = await User.find().lean();

    const users = await User.aggregate([

      // { $match: { age: { $lt: 20 } } },  //gives lessthan 20 age collection match filter the docu.
      // { $sort: { age: -1 } },            //gives sortes collection assending -1 , desending 1
      // { $skip: 5 },                      //skip 5 docs
      // { $limit: 1 },                     //only gives 1
      // { $project: { name: 1, age: 1, _id: 0 } }         //only gives name and age ignore the id beause its 0


      // {
      //   $lookup: {
      //     from: "cities",     //collection name in monogo compass
      //     localField: "name",    //from users
      //     foreignField: "name",    //from city
      //     as: "cityInfo"
      //   },
      // },
      // {$unwind:"$cityInfo"}   //urn array → single object



      //  {
      //     $match: {
      //       $expr: { $gt: ["$marks", "$age"] }    //Returns true if value1 > value2 expr gives that power
      //     }
      //   }



      // {
      //   $group: {    //only return what we typed 
      //     _id:"$name",  //  // group by class
      //     totalage:{$sum : "$age"}  //sum of age (gives us repeated names age)
      //   }
      // },


      {
        $match: { name: "shree" }
      },
      {
        $group: {
          _id: "$age",
          sum: { $sum: 1 }
        }
      }


    ]);

    res.json({ users });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({ updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
