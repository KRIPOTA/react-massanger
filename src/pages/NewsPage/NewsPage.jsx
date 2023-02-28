import React, { useState } from 'react'
import { api } from '../../constants'
import { NewsPagePresent } from './NewsPagePresent';

export function NewsPage() {
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const getFetchNews = async () => {
        setLoading(true)
        setError('')
        try {
            const res = await fetch(api)
            if (res.ok) {
                const data = await res.json()
                setNews(data)
            }
        } catch (error) {
            setError('Ошибка')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <NewsPagePresent getFetchNews={getFetchNews} loading={loading} news={news} error={error}></NewsPagePresent>
        </>
    )
}
