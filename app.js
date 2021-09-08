let stocks = {
    vegetables: ["tomato", "pepper", "onion", "lettuce"],
    liquid: ["water", "tomatoCream"],
    holder: ["plate", "cone", "stick"],
    top: ["pan"]
}

let isShopOpen = true

function time(ms) {
    return new Promise((resolve, reject) =>  {
        if (isShopOpen) {
            setTimeout(resolve, ms)
        }
        else {
            reject(console.log("We don close"))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.vegetables[0]} dey on top `)

        await time (0000)
        console.log("start work")

        await time (2000)
        console.log("cut the veges")

        await time (1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

        await time (1000)
        console.log("omo start machine")

        await time (2000)
        console.log(`Shawarma dey on top ${stocks.holder[0]}`)

        await time (3000)
        console.log(`${stocks.top[0]} dey there`)

        await time (2000)
        console.log("serve Shawarma")
    }
    catch (error) {
        console.log("customer don go", error)
    }
    finally {
        console.log("time don go, we don close")
    }
}

kitchen()