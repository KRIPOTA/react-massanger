import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { register } from '../../services/firebase'
import { RegisterPresent } from './RegisterPresent';

export function Register() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await register(inputs.email, inputs.password)
            navigate('/signin')
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
            <RegisterPresent inputs={inputs} error={error} loading={loading} handleSubmit={handleSubmit} setInputs={setInputs}></RegisterPresent>
        </>
    )
}