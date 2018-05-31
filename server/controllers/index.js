const { Product, Bid } = require('../../db/models');

const AuctionController = {
  'GET': (req, res) => {
    Product.find({
      where: {
        productName: 'Eachine E58 2MP 720P Camera WIFI FPV Foldable Drone 2.4G 6-Axis RC Quadcopter'
      }
    }).then(data => {
      res.status(200).send(data);
    }).catch(err => {
      res.status(404).send(err);
    })
  },

  'POST': (req, res) => {
    Product.update({
      watchers: Sequelize.literal('watchers + 1')
    }, {
      where: {
        productName: req.body.name
      }
    }).then(() => {
      res.status(201).send('successfully updated watchers');
    }).catch(err => {
      res.status(400).send(err);
    })
  }
};

const BidController = {
//   'GET': (req, res) => {
//     Product.findAndCountAll({
//       include: [{
//         model: 'Bid'
//       }, {
//         where: {
//           'productId': 1
//         }
//       }]
//     }).then(count => {
//       Product.getBid({
//         where: {
//           amount: Sequelize.fn('max', Sequelize.col('amount'))
//         }
//       }).then(bid => {
//         let result = {};
//         result.amount = bid.data.amount;
//         result.bids = count;
//         res.status(200).send(result);
//       }).catch(err => {
//         res.status(404).send(err);
//       })
//     })
//   },

  'POST': (req, res) => {
    Product.find({
      where: {
        productName: req.body.name
      }
    }).then(item => {
      if (item) {
        item.createBid({
          amount: req.body.bidAmount
        }).then(() => {
          //make query here to grab the highest bid and bid count
          //consider putting the bidcount and the highest bid on the product table with initial values of null
          res.status(201).send(data);
        }).catch(err => {
          res.status(400).send(err);
        })
      }
    }).catch(err => {
      console.log('could not find product in db', err);
    })
  }
};

module.exports = {
  AuctionController: AuctionController,
  BidController: BidController
};