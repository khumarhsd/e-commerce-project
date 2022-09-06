import { createAsyncThunk } from '@reduxjs/toolkit'
import { commerce } from '../../lib/commerce'


export const createUser = createAsyncThunk('user/createUser', async (data) => {
    console.log(data);
    const body = {
        "firstname": data.firstname,
        "email": data.email,
        "phone": data.phone,
        "external_id": null
    }

    try {
        const result = await fetch(`https://api.chec.io/v1/customers`, {
            method: "POST",
            headers: {
                "X-Authorization": 'pk_44398749b98e97f36e2eab29945d152734631333f22a3',
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(body)
        })

        const response = await result.json();
        return response

    } catch {
        console.error('Server Error')
    }
})

export const getUser = createAsyncThunk(
    'user/getUser',
    async () => {
        try {
            const response = await commerce.customer.about();
            console.log(response)
            return response;
        }
        catch (err) {
            return err.message
        }
    }
)

export const authCustomer = createAsyncThunk('user/fetchAuthUser', async (data) => {
    const body = {
        "email": data.email,
        "base_url": data.base_url
    }

    try {
        const result = await fetch("https://api.chec.io/v1/customers/email-token", {
            method: "POST",
            headers: {
                "X-Authorization": 'pk_44398749b98e97f36e2eab29945d152734631333f22a3',
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body)
        })

        const response = await result.json();
        return response

    } catch (error) {
        if (!error.response) {
            throw error
        }
    }
})