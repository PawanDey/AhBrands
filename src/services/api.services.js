import { Config } from "../config/config";

export const apiService = {
    login,
    register,
    forgotPassword,
    getCategory,
    getAllProducts,
    getProductDetails,
    getCategoryWiseProducts,
    getProfileInfo,
    postQuery,
    updateDeliveryAddress,
}

const BASE_URL = Config.BASE_URL;

// Login Request
async function login(email, password) {
    try {
        const requestOption = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache'
              }
        }
        const response = await fetch(BASE_URL+'auth/login.php?email='+email+'&password='+password, requestOption);
        const user = await handleResponse(response);
        return user;
    } catch (error) {
        return JSON.stringify(error);
    }
}

// Register Request for both Retail & Seller
async function register(email,password,type,business_name,owners_name,contact,address,business_identification_no) {
    try {
        const requestOption = {
            method: 'POST',
            headers: {
                'Cache-Control': 'no-cache'
              },
            body: JSON.stringify({
            'email': email,
            'password': password,
            'type': type,
            'business_name': business_name,
            'owners_name': owners_name,
            'contact': contact,
            'address': address,
            'business_identification_no': business_identification_no
            }),
        }
        const response = await fetch(BASE_URL+'auth/registration.php', requestOption);
        const user = await handleResponse(response);
        return user;
    } catch (error) {
        return JSON.stringify(error);
    }
}

// Forgot password
async function forgotPassword(email) {
    try {
        const requestOption = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache'
              }
        }
        const response = await fetch(BASE_URL+'auth/forgot.php?email='+email, requestOption);
        const user = await handleResponse(response);
        return user;
    } catch (error) {
        return JSON.stringify(error);
    }
}

// get categories List
async function getCategory() {
    try {
        const requestOption = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache'
              }
        }
        const response = await fetch(BASE_URL+'category/categories.php', requestOption);
        const user = await handleResponse(response);
        return user;
    } catch (error) {
        return JSON.stringify(error);
    }
}

// Get all Products List
async function getAllProducts() {
    try {
        const requestOption = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache'
              }
        }
        const response = await fetch(BASE_URL+'products/products.php', requestOption);
        const user = await handleResponse(response);
        return user;
    } catch (error) {
        return JSON.stringify(error);
    }
}

// Get Product Details
async function getProductDetails(id) {
    try {
        const requestOption = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache'
              }
        }
        const response = await fetch(BASE_URL+'products/product.php?product_id='+id, requestOption);
        const user = await handleResponse(response);
        return user;
    } catch (error) {
        return JSON.stringify(error);
    }
}

// Get Category wise Products List
async function getCategoryWiseProducts(id) {
    try {
        const requestOption = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache'
              }
        }
        const response = await fetch(BASE_URL+'products/cat-wise-products.php?category_id='+id, requestOption);
        const user = await handleResponse(response);
        return user;
    } catch (error) {
        return JSON.stringify(error);
    }
}

// Get Profile Info
async function getProfileInfo(id) {
    try {
        const requestOption = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache'
              }
        }
        const response = await fetch(BASE_URL+'user/get-profile.php?user_id='+id, requestOption);
        const user = await handleResponse(response);
        return user;
    } catch (error) {
        return JSON.stringify(error);
    }
}

// Send Query
async function postQuery(name,mobile,message) {
    try {
        const requestOption = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache'
              }
        }
        const response = await fetch(BASE_URL+'contact/save-contact-data.php?name='+name+'&email='+email+'&mobile='+mobile+'&message='+message, requestOption);
        const user = await handleResponse(response);
        return user;
    } catch (error) {
        return JSON.stringify(error);
    }
}

// Update Delivery Address
async function updateDeliveryAddress(id,address) {
    try {
        const requestOption = {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-cache'
              },
        }
        const response = await fetch(BASE_URL+'user/update-profile.php?user_id='+id+'delivery_address='+address, requestOption);
        const user = await handleResponse(response);
        return user;
    } catch (error) {
        return JSON.stringify(error);
    }
}




function handleResponse(response) {
    try {
        return response.text().then(text => {
            // console.log("text-",text)
            const data = text && JSON.parse(text);
            // console.log("data-",data)
            if(!response.ok){
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            return data;
        });
    } catch (error) {
        return JSON.stringify(error);
    }
}
