import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signIn } from '../../services/firebase';
import { auth } from '../../store/profile/actions'
import { SignInPresent } from './SignInPresent';


export function SignIn() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await signIn(inputs.email, inputs.password)
            dispatch(auth(true))
            navigate('/chats')
        } catch (error) {
            console.log(error)
            setError(error.message)
            setInputs({ email: '', password: '' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <SignInPresent inputs={inputs} error={error} loading={loading} handleSubmit={handleSubmit} setInputs={setInputs}></SignInPresent>
        </>
    )
}