const customer = require('../dal/').db('FinalExam').collection('customers')
const cart = require('../dal/').db('FinalExam').collection('carts')

const getCustomers = async(data) => {
    const sellerId = data.sellerId;
    try{
        const result = await cart.find({sellerId: sellerId})
        return result.toArray();
    }catch(err){
        console.log(err)
        return err;
    }
}

const registerUser = async(data) => {
    const {name, email, password, role} = data;
    
    try{
        const user = await customer.insertOne({name, email, password, role});
        return user;
    }catch(err) {
        console.log(err)
        return err;
    }
}

const logInUser = async(data) => {
    const {email, password, role} = data;
    let loggedSuccess = false;
    try{
        const user = await customer.findOne({email: email});
        if(user){
            if(user.password == password){
                loggedSuccess = true;
                const temp = [loggedSuccess, user]
                return temp;
            }
            else{
                loggedSuccess = false;
                const temp = [loggedSuccess , 'Password is not correct'];
                return temp;
            }
        }
        else{
            loggedSuccess = false;
            const temp = [loggedSuccess, 'User is not registered']
            return temp;
        }
    }catch(err){
        console.log(err);
        return err;
    }
}

module.exports = {getCustomers, registerUser, logInUser};