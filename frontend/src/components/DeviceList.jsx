import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loder'

function DeviceList() {
  const [devices, setDevices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/devices')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch devices')
        return res.json()
      })
      .then(data => {
        setDevices(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <Loading text="Loading devices..." />
  if (error) return <div className="center error">Error: {error}</div>

  return (
    <div className="device-container">
      <h2 className="title">📡 Device List</h2>
      <div className="device-grid">
        {devices.map(device => (
          <Link
            to={`/device/${device.DeviceID}`}
            key={device.id}
            className="device-card"
          >
            <div className="device-header">
              <h3>{device.name}</h3>
              <span
                className={`status ${device.status === 'Online' ? 'online' : 'offline'}`}
              >
                {device.status}
              </span>
            </div>
            <p className="device-id">ID: {device.DeviceID}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default DeviceList