import { useState } from 'react'
import {
  Sidebar,
  SidebarItem,
  GlassCard,
  StatCard,
  DeviceCard,
  ListItem,
  Slider,
  WeatherWidget,
  TravelWidget,
  AlarmWidget
} from './components'
import {
  Home, Shield, Bell, Map, Settings, Sun, Moon,
  Thermometer, Droplets, Zap, DoorOpen, Lightbulb, PlaySquare,
  Volume2, TriangleAlert, Info, CheckCircle2
} from 'lucide-react'
import './App.css'

function App() {
  const [volume, setVolume] = useState(30)
  const [activeTab, setActiveTab] = useState('home')
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <div className="layout">
      <Sidebar>
        <SidebarItem icon={<Home />} active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
        <SidebarItem icon={<Shield />} active={activeTab === 'shield'} onClick={() => setActiveTab('shield')} />
        <SidebarItem icon={<Bell />} active={activeTab === 'bell'} onClick={() => setActiveTab('bell')} />
        <SidebarItem icon={<Map />} active={activeTab === 'map'} onClick={() => setActiveTab('map')} />
        <SidebarItem icon={<Settings />} active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
        <div style={{ flex: 1 }} />
        <SidebarItem icon={theme === 'dark' ? <Sun /> : <Moon />} onClick={toggleTheme} />
      </Sidebar>

      <main className="main-content">
        <header className="header">
          <h1>01:40</h1>
          <div className="location-card-container">
            <WeatherWidget />
            <TravelWidget />
            <AlarmWidget />
          </div>
        </header>

        <div className="dashboard-grid">
          <section className="devices">
            <DeviceCard 
              title="Open front gate" 
              subtitle="Off" 
              icon={<DoorOpen />} 
            />
            <DeviceCard 
              title="Open rear gate" 
              subtitle="Off" 
              icon={<DoorOpen />} 
            />
            <DeviceCard 
              title="Kitchen Spotlights" 
              subtitle="Off" 
              icon={<Lightbulb />} 
            />
            <DeviceCard 
              title="Outdoor" 
              subtitle="Off" 
              icon={<Lightbulb />} 
            />
            <DeviceCard 
              title="Lounge Floor lamp" 
              subtitle="Off" 
              icon={<Lightbulb />} 
            />
            <DeviceCard 
              title="Movie Time" 
              subtitle="Illinois Street Lounge" 
              icon={<PlaySquare />} 
              active
            />
            <GlassCard className="volume-card">
              <Slider 
                icon={<Volume2 />} 
                value={volume} 
                onChange={(e) => setVolume(Number(e.target.value))} 
              />
            </GlassCard>
          </section>

          <aside className="side-panels">
            <div className="panel-section">
              <div className="section-title">SENSORS</div>
              <div className="sensor-grid">
                <StatCard 
                  icon={<Thermometer />}
                  value="23.3"
                  unit="°C"
                  label="Outdoor"
                  statusLabel="on"
                  statusColor="var(--accent-secondary)"
                />
                <StatCard 
                  icon={<Thermometer />}
                  value="24.6"
                  unit="°C"
                  label="Downstairs"
                  statusLabel="on"
                  statusColor="var(--accent-secondary)"
                />
                <StatCard 
                  icon={<Thermometer />}
                  value="25.3"
                  unit="°C"
                  label="Upstairs"
                  statusLabel="on"
                  statusColor="var(--accent-secondary)"
                />
              </div>
            </div>

            <div className="panel-section mt-6">
              <div className="section-title">COMFORT</div>
              <div className="comfort-grid">
                <StatCard 
                  icon={<Thermometer />}
                  value="£35.28"
                  label="Climate mode"
                />
                <StatCard 
                  icon={<Droplets />}
                  value=""
                  label="Hot water"
                />
                <StatCard 
                  icon={<Droplets />}
                  value="£7.97"
                  label="Towel rails"
                />
                <StatCard 
                  icon={<Zap color="var(--success)" />}
                  value="574.7"
                  unit="kWh"
                  label="Power usage"
                  large
                />
                <StatCard 
                  icon={<Zap color="var(--warning)" />}
                  value="220.2"
                  unit="kWh"
                  label="Gas usage"
                  large
                />
              </div>
            </div>
            
            <div className="panel-section mt-6">
              <GlassCard>
                <div className="section-title mb-4">ALERTS</div>
                <ListItem
                  icon={<TriangleAlert />}
                  iconColor="var(--warning)"
                  title="Pollen levels very high"
                  action="1h ago"
                />
                <ListItem
                  icon={<Info />}
                  iconColor="var(--accent-secondary)"
                  title="Software update available"
                  action="3h ago"
                />
                <ListItem
                  icon={<CheckCircle2 />}
                  iconColor="var(--success)"
                  title="Weekly energy report ready"
                  action="5h ago"
                />
              </GlassCard>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}

export default App
