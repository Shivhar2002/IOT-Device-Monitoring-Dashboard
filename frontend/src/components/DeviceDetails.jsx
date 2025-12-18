import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from './Loder'

function DeviceDetails() {
  const { id } = useParams()
  const [device, setDevice] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/api/devices/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch device details')
        return res.json()
      })
      .then(data => {
        setDevice(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <Loading text="Loading device details..." />
  if (error) return <div className="center error">Error: {error}</div>
  if (!device) return <div className="center">No device found.</div>

    return (
      <div className="details-container">
        <Link to="/" className="back-link">⬅ Back to Device List</Link>
        <div className="details-card">
          <div className="details-header">
            <h2>{device.name}</h2>
            <span className={`status ${device.status === 'Online' ? 'online' : 'offline'}`}>
              {device.status}
            </span>
          </div>
          <p className="device-id">Device ID: {device.DeviceID}</p>
          <div className="sensor-grid">
            <div className="sensor-box">
              <span>🌡 Temperature</span>
              <strong>{device.temperature} °C</strong>
            </div>
            <div className="sensor-box">
              <span>💧 Humidity</span>
              <strong>{device.humidity} %</strong>
            </div>
          </div>
          <p className="updated-time">
            Last Updated: {new Date(device.lastUpdated).toLocaleString()}
          </p>
        </div>
      </div>
    )
}

export default DeviceDetails
