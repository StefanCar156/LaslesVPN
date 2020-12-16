import freePlan from './img/free-plan-img.png'
import standardPlan from './img/standard-plan-img.png'
import premiumPlan from './img/premium-plan-img.png'

const pricingPlans = [
    {
        id: 1,
        title: "free plan",
        img: freePlan,
        price: "free",
        features: ["unlimited bandwidth", "encrypted connection", "no traffic logs", "works on all devices"]
    },
    {
        id: 2,
        title: "standard plan",
        img: standardPlan,
        price: "$9",
        features: ["unlimited bandwidth", "encrypted connection", "traffic logs", "works on all devices", "connect anywhere"]
    },
    {
        id: 3,
        title: "premium plan",
        img: premiumPlan,
        price: "$12",
        features: ["unlimited bandwidth", "encrypted connection", "traffic logs", "works on all devices", "connect anywhere", "get new features"]
    },

]

export default pricingPlans